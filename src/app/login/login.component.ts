import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="";
  password="";
  constructor(private bankservice:BankService,private router:Router) { }

  ngOnInit(): void {
  }

  onLoginClick(){
     this.bankservice.login(this.username,this.password)
     .subscribe((data:any)=>{
      sweetalert.fire("login sucess!",data.message);
      this.router.navigateByUrl("home");
     }, data=>{
      sweetalert.fire("Login failed","incorrect username or password","error");
     });
  }

  onUsernameChange(event:any){
   this.username = event.target.value;
  }
  onPasswordChange(event:any){
    this.password = event.target.value;
  }
}
