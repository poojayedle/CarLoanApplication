import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/Model/enquiry';
import { CommonService } from 'src/app/Service/common.service';


@Component({
  selector: 'app-all-enquiries',
  templateUrl: './all-enquiries.component.html',
  styleUrls: ['./all-enquiries.component.css']
})
export class AllEnquiriesComponent implements OnInit {
  constructor(private cs:CommonService,private fb:FormBuilder){}
 EnqForm:FormGroup;
  ngOnInit(): void {
    enq:Enquiry
   
  }

}
