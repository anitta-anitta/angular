import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl="http://localhost:4000";
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private htttp: HttpClient) { }

  login(username:any,password:any){
    return this.htttp.post("http://localhost:4000/users/login",{
      username,
      password
     },{withCredentials:true})
   }
  }

