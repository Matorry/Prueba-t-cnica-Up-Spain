import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCardComponent } from './character.card.component/character.card.component';
import { CharacterDetailComponent } from './character.detail.modal/character.detail.modal.component';
import { CharacterListComponent } from './character.list.component/character.list.component';
import { CharacterSnackbarComponent } from './character.snackbar/character.snackbar.component';
import { EditCharacterModalComponent } from './edit.character.modal/edit.character.modal.component';

const routes: Routes = [{ path: '', component: CharacterListComponent }];

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterCardComponent,
    EditCharacterModalComponent,
    CharacterDetailComponent,
    CharacterSnackbarComponent,
  ],
  imports: [
    MatSnackBarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CharactersModule {}
