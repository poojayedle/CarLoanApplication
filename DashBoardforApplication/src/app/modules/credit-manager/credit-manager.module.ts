import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApprovedFormsComponent } from './approved-forms/approved-forms.component';
import { RouterModule, Routes } from '@angular/router';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const croute:Routes=[
  {
    path: "apprvdform", component:ApprovedFormsComponent,
    children:[
      {
        path:"loanDetails", component: LoanDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ApprovedFormsComponent,
    LoanDetailsComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(croute)
  ]
})
export class CreditManagerModule { }
