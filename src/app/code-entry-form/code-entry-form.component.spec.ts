import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeEntryFormComponent } from './code-entry-form.component';

describe('CodeEntryFormComponent', () => {
  let component: CodeEntryFormComponent;
  let fixture: ComponentFixture<CodeEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
