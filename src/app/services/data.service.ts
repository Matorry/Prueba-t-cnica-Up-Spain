import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiCharacterRepositoryService } from './api.character.repository.service';
import { AppStateService } from './app.state.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string;
  constructor(
    private apiService: ApiCharacterRepositoryService,
    private state: AppStateService,
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
        throw error;
      },
    });
  }
}
