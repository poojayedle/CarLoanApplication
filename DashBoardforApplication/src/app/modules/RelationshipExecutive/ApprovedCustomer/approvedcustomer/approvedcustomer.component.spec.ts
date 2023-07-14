import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedcustomerComponent } from './approvedcustomer.component';

describe('ApprovedcustomerComponent', () => {
  let component: ApprovedcustomerComponent;
  let fixture: ComponentFixture<ApprovedcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovedcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
