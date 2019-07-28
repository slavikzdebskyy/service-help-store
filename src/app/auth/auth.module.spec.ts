import { AuthModule } from './auth.module';
import { async } from '@angular/core/testing';

describe('AuthModule', () => {
  let authModule: AuthModule;

  beforeEach(async(() => {
    authModule = new AuthModule();
  }));

  it('should create an instance', () => {
    expect(authModule).toBeTruthy();
  });
});
