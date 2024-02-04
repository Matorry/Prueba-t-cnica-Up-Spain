import { Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-character.snackbar',
  templateUrl: './character.snackbar.component.html',
  styleUrls: ['./character.snackbar.component.scss'],
})
export class CharacterSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
