import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEntryFormComponent } from './child-entry-form.component';

describe('ChildEntryFormComponent', () => {
  let component: ChildEntryFormComponent;
  let fixture: ComponentFixture<ChildEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
