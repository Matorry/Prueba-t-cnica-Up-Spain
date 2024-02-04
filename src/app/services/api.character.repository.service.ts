import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterQuery } from '../types/characterQuery';

@Injectable({
  providedIn: 'root'
})
export class ApiCharacterRepositoryService {

  constructor(private http: HttpClient) {}
  getAll(url: string): Observable<CharacterQuery> {
    return this.http.get(url, {}) as Observable<CharacterQuery>;
  }

}
