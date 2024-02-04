import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterListComponent } from './character-list/character-list.component';

@NgModule({
  declarations: [CharacterListComponent, CharacterCardComponent],
  imports: [CommonModule, MatListModule, MatCardModule],
  exports: [CharacterListComponent],
})
export class CharactersModule {}
