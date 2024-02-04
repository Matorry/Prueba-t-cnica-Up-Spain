import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCardComponent } from './character.card.component/character-card.component';
import { CharacterListComponent } from './character.list.component/character-list.component';

const routes: Routes = [{ path: '', component: CharacterListComponent }];

@NgModule({
  declarations: [CharacterListComponent, CharacterCardComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class CharactersModule {}
