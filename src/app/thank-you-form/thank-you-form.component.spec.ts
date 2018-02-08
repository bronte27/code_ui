import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouFormComponent } from './thank-you-form.component';

describe('ThankYouFormComponent', () => {
  let component: ThankYouFormComponent;
  let fixture: ComponentFixture<ThankYouFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankYouFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
