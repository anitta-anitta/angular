import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
   users=[];
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.bankService.users()
    .subscribe((data:any)=>{
      this.users = data.user;
      console.log(data);
    })
  }
deleteUser(id:any){
  this.bankService.deleteUser(id)
  .subscribe((data: any) => {
    sweetalert.fire("Delete sucess!", data.message);
  }, data => {
    sweetalert.fire("Delete failed", "incorrect username or password", "error");
  });
}

}
