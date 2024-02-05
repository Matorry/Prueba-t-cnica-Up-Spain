import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import { AppStateService } from 'src/app/services/app.state.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-character.list',
  templateUrl: './character.list.component.html',
  styleUrls: ['./character.list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  private stateCharacterSubscription: Subscription | undefined;
  showButton = false;
  scrollHeigth = 500;
  nextQuery: string | null = null;
  constructor(
    @Inject(DOCUMENT)
    private document: Document,
    private dataService: DataService,
    public dialog: MatDialog,
    private state: AppStateService,
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
          this.characters = data.results;
          this.nextQuery = data.info.next;
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

  editCharacter(editedCharacter: Character): void {
    this.dataService.editCharacter(editedCharacter);
  }

  openDetailModal(character: Character): void {
    this.uiService.openDetailModal(character);
  }

  openSnackBar(message: string, durationInSeconds: number) {
    this.uiService.openSnackBar(message, durationInSeconds);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.scrollY;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffSet | scrollTop) > this.scrollHeigth;
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    if (this.nextQuery) this.dataService.getMoreCharacters(this.nextQuery);
  }
}
