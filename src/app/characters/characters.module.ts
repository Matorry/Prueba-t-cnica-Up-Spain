import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacterCardComponent } from './character.card.component/character.card.component';
import { CharacterDetailComponent } from './character.detail.modal.component/character.detail.modal.component';
import { EditCharacterModalComponent } from './character.edit.modal.component/edit.character.modal.component';
import { CharacterListComponent } from './character.list.component/character.list.component';
import { CharacterRowComponent } from './character.row.component/character.row.component';
import { CharacterSearchFormComponent } from './character.search.form/character.search.form.component';
import { CharacterSnackbarComponent } from './character.snackbar.component/character.snackbar.component';
import { CharacterTableComponent } from './character.table.component/character.table.component.ts';
import { CharactersRoutingModule } from './characters.routing.module';

@NgModule({
  declarations: [
    CharacterTableComponent,
    CharacterRowComponent,
    EditCharacterModalComponent,
    CharacterDetailComponent,
    CharacterSnackbarComponent,
    CharacterListComponent,
    CharacterCardComponent,
    CharacterSearchFormComponent,
  ],
  imports: [
    MatAutocompleteModule,
    InfiniteScrollModule,
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
    CharactersRoutingModule,
  ],
  exports: [RouterModule],
})
export class CharactersModule {}
