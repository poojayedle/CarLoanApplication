import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { GetCibilComponent } from './get-cibil/get-cibil.component';
import { ApplyLoanComponent } from './apply-loan/apply-loan.component';

const routes: Routes = [
  {
    path:'view_enquiry',component:ViewEnquiryComponent
  },
  {
    path:'req_cibil',component:GetCibilComponent
  },
  {
    path:'applyLoan',component:ApplyLoanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
