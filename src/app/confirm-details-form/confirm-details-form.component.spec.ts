import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDetailsFormComponent } from './confirm-details-form.component';

describe('ConfirmDetailsFormComponent', () => {
  let component: ConfirmDetailsFormComponent;
  let fixture: ComponentFixture<ConfirmDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
