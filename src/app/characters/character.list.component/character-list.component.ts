import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import { AppStateService } from 'src/app/services/app.state.service';
import { DataService } from 'src/app/services/data.service';
import { CharacterDetailComponent } from '../character.detail.modal/character.detail.modal.component';
import { EditCharacterModalComponent } from '../edit.character.modal/edit.character.modal.component';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  private stateCharacterSubscription: Subscription | undefined;

  constructor(
    private dataService: DataService,
    private state: AppStateService,
    public dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.dataService.getAllCharacters();
    this.stateCharacterSubscription = this.state.getState().subscribe({
      next: (data) => (this.characters = data.results),
    });
  }

  ngOnDestroy(): void {
    if (this.stateCharacterSubscription) {
      this.stateCharacterSubscription.unsubscribe();
    }

    this.characters = [];
  }

  openEditModal(character: Character): void {
    const dialogRef = this.dialog.open(EditCharacterModalComponent, {
      data: character,
    });

    // Añadir snack-bar
    dialogRef.afterClosed().subscribe((result) => {
      this.editCharacter(result);
    });
  }

  openDetailModal(character: Character): void {
    const dialogRef = this.dialog.open(CharacterDetailComponent, {
      data: character,
    });
  }

  editCharacter(editedCharacter: Character): void {
    this.dataService.editCharacter(editedCharacter);
  }
}
