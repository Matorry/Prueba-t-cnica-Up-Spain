import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterDetailComponent } from '../characters/character.detail.modal.component/character.detail.modal.component';
import { EditCharacterModalComponent } from '../characters/character.edit.modal.component/edit.character.modal.component';
import { CharacterSnackbarComponent } from '../characters/character.snackbar.component/character.snackbar.component';

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
