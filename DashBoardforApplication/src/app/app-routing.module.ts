import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { AboutUSComponent } from './template/about-us/about-us.component';
import { LoginComponent } from './entry/login/login.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { LocationComponent } from './template/location/location.component';
import { EnquiryComponent } from './template/enquiry/enquiry.component';

import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { relationalExecutiveModule } from './modules/RelationshipExecutive/relational-executive.module';
import { OperationalExecutiveModule } from './modules/operational-executive/operational-executive.module';
import { CreditManagerModule } from './modules/credit-manager/credit-manager.module';
import { BankManagerModule } from './modules/bank-manager/bank-manager.module';



const routes: Routes = [
  {
    path: "", component: HomeComponent,
    children: [
      {
        path: 'about', component: AboutUSComponent
      },
      {
        path: 'emi', component: EmiCalculatorComponent
      },
      {
        path: 'contact', component: ContactUsComponent
      },
      {
        path: 'location', component: LocationComponent
      }
    ]
  },
  {
    path: "log", component: LoginComponent
  },
  {
    path: "enquiry", component: EnquiryComponent
  },
  {
    path: "role", component: AdminLayoutComponent,
    children: [
      {
        path: 'RE', loadChildren: () => relationalExecutiveModule
      },
      {
        path: "OE", loadChildren: () => OperationalExecutiveModule
      },
      {
        path: "CM", loadChildren: () => CreditManagerModule
      },
      {
        path: "BM", loadChildren: () => BankManagerModule
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
