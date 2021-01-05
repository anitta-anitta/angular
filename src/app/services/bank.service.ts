import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const baseUrl="http://localhost:4000";
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  login(username:any,password:any){
    return this.http.post(baseUrl+"/users/login",{
      username,
      password
     },{withCredentials:true})
   }
   
   deposit(username:any,amount:any){
    return this.http.post(baseUrl+"/users/deposit",{
      username,
      amount
     },{withCredentials:true})
   }
   withdraw(username:any,amount:any){
    return this.http.post(baseUrl+"/users/withdraw",{
      username,
      amount
     },{withCredentials:true})
   }
   history(){
    return this.http.get(baseUrl+"/users/transcation-history",{withCredentials:true})
 }
  }