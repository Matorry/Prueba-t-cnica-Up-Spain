import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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

  getAllCharacters(): void {
    this.apiService.getAll(this.url).subscribe({
      next: (data) => {
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
}
