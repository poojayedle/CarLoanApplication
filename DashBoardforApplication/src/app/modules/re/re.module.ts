import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { GetCibilComponent } from './get-cibil/get-cibil.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

console.log("Re module!!!");
@NgModule({
  declarations: [
    ViewEnquiryComponent,
    GetCibilComponent,
    ApplyLoanComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
