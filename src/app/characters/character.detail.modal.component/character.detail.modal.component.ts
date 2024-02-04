import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character.detail',
  templateUrl: './character.detail.modal.component.html',
  styleUrls: ['./character.detail.modal.component.scss'],
})
export class CharacterDetailComponent {
  @Input() character!: Character;
  @Output() openEditModal = new EventEmitter<Character>();
  constructor(
    public dialogRef: MatDialogRef<CharacterDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Character,
  ) {}
}
