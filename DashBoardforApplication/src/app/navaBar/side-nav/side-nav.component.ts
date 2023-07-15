import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus:boolean=false;
  
  list=[
   {
    RE:[
      {path:"cform", title:"CustomerForm", icon:"fa fa-file"},
      {path:"all", title:"AllEnquiries", icon:"fa fa-list"},
      {path:"rejected", title:"rejectedcustomer", icon:"fa fa-list"},
      {path:"approved", title:"ApprovedCustomer", icon:"fa fa-list"}
      ],
      OE:[
        {
          path:"displayform", title:"displayform", icon:"fa fa-file"
        }
      ],
      CM:[
        {
          path:"apprvdform", title:"ApprovedForms", icon:"fa fa-list"
        }
      ],
      BM:[
        {
          path:"applicantlist", title:"ApplicantList", icon:"fa fa-list"
        },
        {
          path:"ledger", title:"Ledger", icon:"fa fa-money"
        }
      ]
   }
  ];

  role:string;

  constructor() { }

  ngOnInit(): void {

    console.log(this.list);
    this.role=sessionStorage.getItem("role");

  }

}
