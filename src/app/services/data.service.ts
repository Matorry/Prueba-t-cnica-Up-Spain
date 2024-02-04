import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/internal/operators/take';
import { Character } from '../models/character';
import { CharacterQuery } from '../types/characterQuery';
import { ApiCharacterRepositoryService } from './api.character.repository.service';
import { AppStateService } from './app.state.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url: string;

  constructor(
    private apiService: ApiCharacterRepositoryService,
    private state: AppStateService,
    private router: Router,
  ) {
    this.url = 'https://rickandmortyapi.com/api/character';
  }

  getCharacters(url?: string): void {
    this.apiService.getAll(url ? url : this.url).subscribe({
      next: (data: CharacterQuery) => {
        this.state.setState(data);
      },
      error: (error) => {
        let errorMessage = 'Ocurrió un error al obtener los personajes.';
        if (error instanceof HttpErrorResponse) {
          errorMessage = `Error ${error.status}: ${error.statusText}`;
        }
        this.state.setErrorMessage(errorMessage);
        this.router.navigate(['/error']);
        throw error;
      },
    });
  }

  getMoreCharacters(url: string): void {
    this.apiService.getAll(url).subscribe({
      next: (data: CharacterQuery) => {
        this.state.updateCharacters(data);
      },
      error: (error) => {
        let errorMessage = 'Ocurrió un error al obtener los personajes.';
        if (error instanceof HttpErrorResponse) {
          errorMessage = `Error ${error.status}: ${error.statusText}`;
        }
        this.state.setErrorMessage(errorMessage);
        this.router.navigate(['/error']);
        throw error;
      },
    });
  }

  editCharacter(updatedCharacter: Character): void {
    this.state.state.pipe(take(1)).subscribe((currentState) => {
      const characterIndex = currentState.results.findIndex(
        (char) => char.id === updatedCharacter.id,
      );

      if (characterIndex !== -1) {
        const updatedResults = [...currentState.results];
        updatedResults[characterIndex] = updatedCharacter;

        this.state.setState({
          ...currentState,
          results: updatedResults,
        });
      }
    });
  }
}
