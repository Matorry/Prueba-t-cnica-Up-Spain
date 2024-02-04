import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { ApiCharacterRepositoryService } from '../../services/api.character.repository.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private apiService: ApiCharacterRepositoryService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.apiService
      .getAll('https://rickandmortyapi.com/api/character')
      .subscribe({
        next: (data) => {
          this.characters = data.results;
        },
        error: (error) => {
          console.error('Error fetching characters:', error);
          this.router.navigate(['/error']);
        },
      });
  }
}
