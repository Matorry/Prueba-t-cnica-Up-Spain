import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSnackbarComponent } from './character.snackbar.component';

describe('CharacterSnackbarComponent', () => {
  let component: CharacterSnackbarComponent;
  let fixture: ComponentFixture<CharacterSnackbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSnackbarComponent]
    });
    fixture = TestBed.createComponent(CharacterSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
