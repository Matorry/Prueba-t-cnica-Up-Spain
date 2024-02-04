import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Character } from 'src/app/models/character';
import { AppStateService } from 'src/app/services/app.state.service';
import { DataService } from 'src/app/services/data.service';

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
}
