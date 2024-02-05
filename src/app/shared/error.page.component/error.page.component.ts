import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppStateService } from 'src/app/services/app.state.service';

@Component({
  selector: 'app-error.page.component',
  templateUrl: './error.page.component.html',
  styleUrls: ['./error.page.component.scss'],
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  private errorMessageSubscription: Subscription | undefined;

  constructor(private state: AppStateService) {}

  ngOnInit(): void {
    this.errorMessageSubscription = this.state.getErrorMessage().subscribe({
      next: (data) => (this.errorMessage = data),
    });
  }

  ngOnDestroy(): void {
    if (this.errorMessageSubscription) {
      this.errorMessageSubscription.unsubscribe();
    }
  }
}
