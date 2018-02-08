import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEntryFormComponent } from './contact-entry-form.component';

describe('ContactEntryFormComponent', () => {
  let component: ContactEntryFormComponent;
  let fixture: ComponentFixture<ContactEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
