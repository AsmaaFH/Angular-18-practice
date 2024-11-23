import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { unSearchedTermGuard } from './un-searched-term.guard';
import { SearchComponent } from '../search/search.component';


describe('unsearchedTermGuard', () => {
  const executeGuard: CanDeactivateFn<SearchComponent> = (...guardParameters) =>
      TestBed.runInInjectionContext(() => unSearchedTermGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
