import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit{
  @Output() sideNavToggled=new EventEmitter<boolean>();
 menuStatus:boolean=false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  SideNavToggled(){
    this.menuStatus=!this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  logout(){
    this.route.navigate(['log']);
  }
  emi(){
    this.route.navigate(['emi']);
  }

}
