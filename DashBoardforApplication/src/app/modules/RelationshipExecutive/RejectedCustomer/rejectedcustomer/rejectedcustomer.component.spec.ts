import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedcustomerComponent } from './rejectedcustomer.component';

describe('RejectedcustomerComponent', () => {
  let component: RejectedcustomerComponent;
  let fixture: ComponentFixture<RejectedcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedcustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejectedcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
