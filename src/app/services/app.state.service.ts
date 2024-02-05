import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CharacterQuery } from '../types/characterQuery';

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private readonly characterState$ = new BehaviorSubject<CharacterQuery>(
    {} as CharacterQuery,
  );
  private readonly searchCharacterState$ = new BehaviorSubject<CharacterQuery>(
    {} as CharacterQuery,
  );
  private readonly isOpenModal$ = new BehaviorSubject<boolean>(false);
  private readonly errorMessage$ = new BehaviorSubject<string>('');

  get state(): Observable<CharacterQuery> {
    return this.characterState$.asObservable();
  }

  getState(): Observable<CharacterQuery> {
    return this.characterState$.asObservable();
  }
  setState(newState: Partial<CharacterQuery>): void {
    this.characterState$.next({ ...this.characterState$.value, ...newState });
  }
  getIsOpenModal(): Observable<boolean> {
    return this.isOpenModal$.asObservable();
  }
  setIsOpenModal(isOpen: boolean): void {
    return this.isOpenModal$.next(isOpen);
  }
  getErrorMessage(): Observable<string> {
    return this.errorMessage$.asObservable();
  }
  setErrorMessage(message: string): void {
    return this.errorMessage$.next(message);
  }

  updateCharacters(data: CharacterQuery) {
    data.results = [
      ...this.characterState$.getValue().results,
      ...data.results,
    ];
    this.characterState$.next(data);
  }

  getSearchCharacterState(): Observable<CharacterQuery> {
    return this.searchCharacterState$.asObservable();
  }
  setSearchCharacterState(newState?: CharacterQuery): void {
    if (!newState) {
      this.searchCharacterState$.next({} as CharacterQuery);
      return;
    }
    this.searchCharacterState$.next(newState);
  }
}
