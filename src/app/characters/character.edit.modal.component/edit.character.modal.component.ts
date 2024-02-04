import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-edit.character.modal',
  templateUrl: './edit.character.modal.component.html',
  styleUrls: ['./edit.character.modal.component.scss'],
})
export class EditCharacterModalComponent {
  @Input() character!: Character;
  @Output() saveChanges = new EventEmitter<Character>();
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditCharacterModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Character,
  ) {
    this.editForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      status: ['', Validators.required],
    });

    if (this.data) {
      this.editForm.patchValue({
        name: this.data.name,
        location: this.data.location.name,
        status: this.data.status,
      });
    }
  }

  onSaveChanges(): void {
    const editedCharacter: Character = {
      ...this.data,
      name: this.editForm.value.name,
      location: { name: this.editForm.value.location, url: '' },
      status: this.editForm.value.status,
    };

    this.saveChanges.emit(editedCharacter);
    this.dialogRef.close(editedCharacter);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
