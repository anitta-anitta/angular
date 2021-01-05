import { Component, OnInit } from '@angular/core';
import { BankService } from '../services/bank.service';
import sweetalert from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoginForm = true;
  loginForm = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(2)]],
    password: ["", [Validators.required, Validators.minLength(2)]],
  });



  constructor(private bankservice: BankService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onLoginClick() {
    if (this.loginForm.valid) {
      this.bankservice.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe((data: any) => {
          sweetalert.fire("login sucess!", data.message);
          this.router.navigateByUrl("home");
        }, data => {
          sweetalert.fire("Login failed", "incorrect username or password", "error");
        });
    } else {
      alert("Invalid Details")
    }
  }
}