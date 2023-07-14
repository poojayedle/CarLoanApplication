import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicantListComponent } from './ApplicantList/applicant-list/applicant-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SanctionletterComponent } from './SanctionLetter/sanctionletter/sanctionletter.component';
import { EmailComponent } from './Email/email/email.component';
import { LedgerComponent } from './Ledger/ledger/ledger.component';
import { EmiStatusPipe } from './pipe/emi-status.pipe';


const croute:Routes=[
  {
    path: "applicantlist", component:ApplicantListComponent,
    children:[
      {
        path: "sanction", component: SanctionletterComponent
      },
      {
        path: "email", component: EmailComponent
      }
    ]
  },
  {
    path: "ledger", component: LedgerComponent
  }
];

@NgModule({
  declarations: [
    ApplicantListComponent,
    SanctionletterComponent,
    EmailComponent,
    LedgerComponent,
    EmiStatusPipe,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(croute)
  ]
})
export class BankManagerModule { }
