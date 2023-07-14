import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFormComponent } from './display-form/display-form.component';
import { RouterModule, Routes } from '@angular/router';
import { CibilscoreComponent } from './cibilscore/cibilscore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const croute:Routes=[
  {
    path:"displayform",component:DisplayFormComponent,
 children:[
  {
    path:"cibil", component: CibilscoreComponent
  }
 ]
  }
  ];

@NgModule({
  declarations: [
    DisplayFormComponent,
    CibilscoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(croute)
  ]
})
export class OperationalExecutiveModule { }
