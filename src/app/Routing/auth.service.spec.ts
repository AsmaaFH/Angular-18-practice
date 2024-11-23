import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService For Is Logged In', () => {
  let service: AuthService | null = null;
  let localStorageMock: { [key: string]: string };

  beforeEach(() => {
    service = new AuthService();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('loggedIn')
  });

  it('should return true from isLoggedIn when there is loggedIn item in localStorage', () => {
    localStorage.setItem('loggedIn', 'true');
    expect(service?.isLoggedIn()).toBeTruthy();
  });

  it('should return false from isLoggedIn when there is no loggedIn item in localStorage', () => {
    localStorage.setItem('loggedIn', 'false');
    expect(service?.isLoggedIn()).toBeFalse();
  });
});
