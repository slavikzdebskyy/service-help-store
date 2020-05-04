import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { LoaderSizeEnum } from '@service-help/modules';
import { By } from '@angular/platform-browser';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderComponent],
    })
    .overrideComponent(LoaderComponent, {
      set: {
        changeDetection: ChangeDetectionStrategy.Default,
      },
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add class \'medium\' by default', () => {
    const element: HTMLElement = fixture.debugElement.query(By.css('.triple-spinner')).nativeElement;
    fixture.detectChanges();

    expect(element.classList).toContain('medium');
  });

  it('should add class \'big\'', () => {
    component.size = LoaderSizeEnum.big;
    const element: HTMLElement = fixture.debugElement.query(By.css('.triple-spinner')).nativeElement;
    fixture.detectChanges();

    expect(element.classList).toContain('big');
  });

  it('should add class \'small\'', () => {
    component.size = LoaderSizeEnum.small;
    const element: HTMLElement = fixture.debugElement.query(By.css('.triple-spinner')).nativeElement;
    fixture.detectChanges();

    expect(element.classList).toContain('small');
  });

  it('should create backDrop container', () => {
    component.hasBackdrop = true;
    fixture.detectChanges();
    const element: HTMLElement = fixture.debugElement.query(By.css('.backdrop')).nativeElement;
    fixture.detectChanges();

    expect(element).toBeTruthy();
  });
});
