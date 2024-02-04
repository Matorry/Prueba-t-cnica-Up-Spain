import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CharacterQuery } from '../types/characterQuery';

@Injectable({
  providedIn: 'root'
})
export class ApiCharacterRepositoryService {

  constructor(private http: HttpClient) {}

  getAll(url: string): Observable<CharacterQuery> {
    return this.http.get<CharacterQuery>(url).pipe(
      catchError(() => {
        console.error('Error fetching characters');
        return throwError(() => new Error('Error fetching characters'));
      })
    );
  }
}
