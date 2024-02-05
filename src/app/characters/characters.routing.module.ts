import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character.list.component/character.list.component';
import { CharacterTableComponent } from './character.table.component/character.table.component.ts';

const routes: Routes = [
  { path: 'cards', component: CharacterListComponent },
  { path: 'table', component: CharacterTableComponent },
  { path: '', redirectTo: 'table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersRoutingModule {}
