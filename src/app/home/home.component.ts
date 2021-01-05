import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 dpUsername="";
 dpAmount="";
 wdUsername="";
 wdAmount="";
 balance="";
 constructor(private bankService: BankService) { }

  ngOnInit(): void {
  }

  withdraw(){
      this.bankService.withdraw(this.wdUsername,this.wdAmount)
       .subscribe((data:any)=>{
         this.dpUsername="";
         this.balance=data.balance;
        sweetalert.fire("withdraw sucess!",data.message);
       }, data=>{
        sweetalert.fire("withdraw failed","incorrect username or password","error");
       });
  }

  deposit(){
    this.bankService.deposit(this.dpUsername,this.dpAmount)
    .subscribe((data:any)=>{
      this.dpUsername="";
      this.balance=data.balance;
      sweetalert.fire("deposit sucess!",data.message);
     }, data=>{
      sweetalert.fire("deposit failed","incorrect username or password","error");
     });
    
  }
  onDepositUsernameChange(event:any){
      this.dpUsername = event.target.value;
  }
  onDepositAmountChange(event:any){
    this.dpAmount = event.target.value;
  }
  onWithdrawUsernameChange(event:any){
    this.wdUsername = event.target.value;
  }
  onWithdrawAmountChange(event:any){
    this.wdAmount = event.target.value;
  }
}
