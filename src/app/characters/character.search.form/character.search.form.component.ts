import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Character } from 'src/app/models/character';
import { AppStateService } from 'src/app/services/app.state.service';
import { DataService } from 'src/app/services/data.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-character-search-form',
  templateUrl: './character.search.form.component.html',
  styleUrls: ['./character.search.form.component.scss'],
})
export class CharacterSearchFormComponent implements OnInit {
  searchForm: FormGroup;
  characters: Character[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private state: AppStateService,
    private uiService: UiService,
  ) {
    this.searchForm = this.formBuilder.group({
      characterName: [''],
    });
  }

  ngOnInit(): void {
    this.watchFormChanges();
  }

  watchFormChanges(): void {
    this.searchForm!.get('characterName')!
      .valueChanges.pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => {
        this.searchCharacters(value);
      });
  }

  searchCharacters(characterName: string): void {
    if (characterName) {
      this.state.getSearchCharacterState().subscribe((data) => {
        this.characters = data.results;
      });
      this.dataService.searchCharactersByName(characterName);
    }
  }

  displayFn(character: Character): string {
    return character ? character.name : '';
  }

  selectCharacter(character: Character) {
    this.uiService.openDetailModal(character);
    this.state.setSearchCharacterState();
  }
}
