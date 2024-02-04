import { TestBed } from '@angular/core/testing';

import { ApiCharacterRepositoryService } from './api.character.repository.service';

describe('ApiCharacterRepositoryService', () => {
  let service: ApiCharacterRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCharacterRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
