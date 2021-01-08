import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
 balance="";

 depositForm = this.fb.group({
   dpUsername:["",[Validators.required]],
   dpAmount:["",[Validators.required]],
 });

 withdrawForm = this.fb.group({
   wdUsername:["",[Validators.required]],
   wdAmount:["",[Validators.required]],
 });

 constructor(private bankService: BankService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  withdraw(){
      this.bankService.withdraw(this.withdrawForm.value.wdUsername,this.withdrawForm.value.wdAmount)
       .subscribe((data:any)=>{
         this.balance=data.balance;
         this.withdrawForm.reset();
        sweetalert.fire("withdraw sucess!",data.message);
       }, data=>{
        sweetalert.fire("withdraw failed","incorrect username or password","error");
       });
  }

  deposit(){
    if(this.depositForm.valid){
    this.bankService.deposit(this.depositForm.value.dpUsername,this.depositForm.value.dpAmount)
    .subscribe((data:any)=>{
      this.balance=data.balance;
      this.depositForm.reset();
      sweetalert.fire("deposit sucess!",data.message);
     }, data=>{
      sweetalert.fire("deposit failed","incorrect username or password","error");
     });
   }else{
     alert("Invalid details")
   }
  }
}
