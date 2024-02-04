import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterDetailComponent } from '../characters/character.detail.modal/character.detail.modal.component';
import { CharacterSnackbarComponent } from '../characters/character.snackbar/character.snackbar.component';
import { EditCharacterModalComponent } from '../characters/edit.character.modal/edit.character.modal.component';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  openEditModal(character: Character): Observable<any> {
    const dialogRef = this.dialog.open(EditCharacterModalComponent, {
      data: character,
    });
    return dialogRef.afterClosed();
  }

  openDetailModal(character: Character): void {
    this.dialog.open(CharacterDetailComponent, { data: character });
  }

  openSnackBar(message: string, durationInSeconds: number): void {
    this.snackBar.openFromComponent(CharacterSnackbarComponent, {
      duration: durationInSeconds * 1000,
      data: message,
    });
  }
}
