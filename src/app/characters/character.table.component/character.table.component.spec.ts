import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTableComponent } from './character.table.component.ts.js';

describe('CharacterListComponent', () => {
  let component: CharacterTableComponent;
  let fixture: ComponentFixture<CharacterTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterTableComponent],
    });
    fixture = TestBed.createComponent(CharacterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
