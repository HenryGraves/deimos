import { TestBed, inject } from '@angular/core/testing';

import { GameListServiceService } from './game-list-service.service';

describe('GameListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameListServiceService]
    });
  });

  it('should be created', inject([GameListServiceService], (service: GameListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
