import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './entry/home/home.component';
import { HomeHeaderComponent } from './homeHeader/home-header/home-header.component';
import { AboutUSComponent } from './template/about-us/about-us.component';
import { LoginComponent } from './entry/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationComponent } from './template/location/location.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { EnquiryComponent } from './template/enquiry/enquiry.component';
import { DashBoardComponent } from './entry/dash-board/dash-board.component';


import { EmailComponent } from './entry/email/email.component';
import { HttpClientModule} from '@angular/common/http';
import { EmiCalculatorComponent } from './template/emi-calculator/emi-calculator.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SideNavComponent } from './side-nav/side-nav.component';
// import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    AboutUSComponent,
    LoginComponent,
    LocationComponent,
    ContactUsComponent,
    EnquiryComponent,
    DashBoardComponent,
    AdminLayoutComponent,
    EmailComponent,
    EmiCalculatorComponent,
    SideNavComponent,
    UserMenuComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    // NgxUiLoaderModule,
    // NgxUiLoaderHttpModule.forRoot({showForeground:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
