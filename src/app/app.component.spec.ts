import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { TestBed, async } from '@angular/core/testing';

  //  Components
import { AppComponent } from './app.component';

class TranslateServiceMock {
  public setDefaultLang(): any {}
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture: any = TestBed.createComponent(AppComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title "service-help-store"', () => {
    const fixture: any = TestBed.createComponent(AppComponent);
    const app: any = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('service-help-store');
  });
});
