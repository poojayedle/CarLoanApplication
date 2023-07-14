import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customerForm/customer-form/customer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApprovedcustomerComponent } from './ApprovedCustomer/approvedcustomer/approvedcustomer.component';
import { RejectedcustomerComponent } from './RejectedCustomer/rejectedcustomer/rejectedcustomer.component';
import { AllEnquiriesComponent } from './AllEnquiries/all-enquiries/all-enquiries.component';
import { AddDetailsComponent } from './AddDetails/add-details/add-details.component';
import { BankDetailsComponent } from './BankDetails/bank-details/bank-details.component';


const croute:Routes=[
{
  path:"cform",component:CustomerFormComponent
},
{
  path:'all', component:AllEnquiriesComponent
},
{
  path:"approved", component: ApprovedcustomerComponent,
  children:[
    {
      path:"addDetails", component: AddDetailsComponent
    },
    {
      path:"bankDetails", component: BankDetailsComponent
    }
  ]
},
{
  path:"rejected", component: RejectedcustomerComponent
}
];

@NgModule({
  declarations: [CustomerFormComponent,
    ApprovedcustomerComponent,
    RejectedcustomerComponent, 
    AllEnquiriesComponent, 
    AddDetailsComponent, BankDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(croute)
  ]
})
export class relationalExecutiveModule { }
