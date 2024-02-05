import { Component, Input } from '@angular/core';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-row',
  templateUrl: './character.row.component.html',
  styleUrls: ['./character.row.component.scss'],
})
export class CharacterRowComponent {
  @Input() character: Character | undefined;
}
