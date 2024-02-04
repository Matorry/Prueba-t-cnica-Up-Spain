import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import { AppStateService } from 'src/app/services/app.state.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character.list.component.html',
  styleUrls: ['./character.list.component.scss'],
})
export class CharacterListComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  private stateCharacterSubscription: Subscription | undefined;
  private loadedCharactersCount = 10;
  private paginatorController = false;
  nextQuery: string | null = null;

  constructor(
    private dataService: DataService,
    private state: AppStateService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private uiService: UiService,
  ) {}

  ngOnInit() {
    this.loadCharacters();
  }

  ngOnDestroy(): void {
    if (this.stateCharacterSubscription) {
      this.stateCharacterSubscription.unsubscribe();
    }

    this.characters = [];
  }

  loadCharacters(): void {
    this.dataService.getCharacters();
    this.stateCharacterSubscription = this.state.getState().subscribe({
      next: (data) => {
        if (data.results) {
          this.characters = data.results.slice(0, this.loadedCharactersCount);
          this.nextQuery = data.info.next;
        }
      },
    });
  }

  loadMoreCharacters(): void {
    const totalCharacters = this.dataService.getTotalCharacters();

    if (!this.paginatorController) {
      this.loadedCharactersCount += 10;
      this.paginatorController = !this.paginatorController;
      this.updateCharacters();
    } else {
      if (this.nextQuery) {
        this.dataService.getMoreCharacters(this.nextQuery);
        this.loadedCharactersCount += 10;
        this.paginatorController = !this.paginatorController;
        this.updateCharacters();
      }
    }
  }

  private updateCharacters(): void {
    this.stateCharacterSubscription = this.state.getState().subscribe({
      next: (data) => {
        if (data.results) {
          this.characters = data.results.slice(0, this.loadedCharactersCount);
        }
      },
    });
  }

  openEditModal(character: Character): void {
    this.uiService.openEditModal(character).subscribe((result) => {
      if (result) {
        this.openSnackBar('Changes successfully applied', 1);
      }
      this.editCharacter(result);
    });
  }

  openDetailModal(character: Character): void {
    this.uiService.openDetailModal(character);
  }

  editCharacter(editedCharacter: Character): void {
    this.dataService.editCharacter(editedCharacter);
  }

  openSnackBar(message: string, durationInSeconds: number) {
    this.uiService.openSnackBar(message, durationInSeconds);
  }
}
