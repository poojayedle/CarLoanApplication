import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
export interface user {
  username: string;
  password: string;
  repassword: string;
  email: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // constructor(private fb:FormBuilder,private router:Router){}
  // loginForm!: FormGroup;
  // ngOnInit(): void {
  //   this.loginForm=this.fb.group({
  //     userName:[],
  //     password:[]
  //   })
  // }
  // onLogin()
  // {
  //      if(this.loginForm.controls['userName'].value=='re'
  //      &&this.loginForm.controls['password'].value=='re@123')
  //      {                          //KEY       VALUE
  //          sessionStorage.setItem('userType','re');

  //         this.router.navigateByUrl('/dash/re')
  //      }
  //      else if(this.loginForm.controls['userName'].value=='oe'
  //      &&this.loginForm.controls['password'].value=='oe@123')
  //      {
  //       sessionStorage.setItem('userType','oe')
  //       this.router.navigateByUrl('/dash/oe');
  //      }
  //      else{
  //       alert("Enter valid username or password..!")
  //      }
  // }

  u: user = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
<<<<<<< HEAD
  constructor(private router: Router, private fb:FormBuilder) {}
  loginForm: FormGroup;
  username: string='';
  password:string='';
  ngOnInit() {
    this.loginForm=this.fb.group({
          username:[],
          password:[]
        })
  }
  login(u) {
=======
  constructor(private router: Router,private fb:FormBuilder) {}
  loginForm!: FormGroup;
  username: string='';
  password:string='';
  ngOnInit() {
  //   this.loginForm=this.fb.group(
  //     {
  //       username:[],
  // password:[]
  //     }
  //   )
  }
  onLogin(u) {
>>>>>>> b29de6201bacc6975c5d73a52be38041abb6dddf
    console.log("login called");
    console.log(u.username,u.password);
    
    if (u.username === 'ex@re' && u.password === 'exre') {
      console.log('in Relational Officer');
       sessionStorage.setItem('role', 'RE');
      this.router.navigateByUrl("role/RE");
    }
    if (u.username === 'ex@oe' && u.password === 'exoe') {
      console.log('in Operational Officer');
       sessionStorage.setItem('role', 'OE');
      this.router.navigateByUrl("role/OE");
    }
    if (u.username === 'ex@cm' && u.password === 'excm') {
      console.log('in Credit Manager');
       sessionStorage.setItem('role', 'CM');
      this.router.navigateByUrl("role/CM");
    }
    if (u.username === 'ex@bm' && u.password === 'exbm') {
      console.log('in Bank Manager');
       sessionStorage.setItem('role', 'BM');
      this.router.navigateByUrl("role/BM");
    }
   

    if (u.username === 'emp' && u.password === 'emp') {
      console.log('in emp');
      sessionStorage.setItem('role', 'emp');
      this.router.navigateByUrl("role/emp/empdash");
    }
    if (u.username === 'oe' && u.password === 'oe') {
     
      sessionStorage.setItem('role', 'operation');
      this.router.navigateByUrl("role/operation/oedash");
    }
    if (u.username === 'cm' && u.password === 'cm') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'cr');
      this.router.navigateByUrl("role/cr/credit");
    }
    if (u.username === 're' && u.password === 're') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'relation');
      this.router.navigateByUrl("role/relation/oecustomer");
    }
    if (u.username === 'abc' && u.password === 'abc') {
      console.log(u.username,u.password);
      sessionStorage.setItem('role', 'ab');
      this.router.navigateByUrl("role/ab/abcdash");
    }
    
  }
  signup(u) {
    console.log("signup");
  }
}
