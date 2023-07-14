import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedFormsComponent } from './approved-forms.component';

describe('ApprovedFormsComponent', () => {
  let component: ApprovedFormsComponent;
  let fixture: ComponentFixture<ApprovedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
