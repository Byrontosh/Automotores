import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  myFormUser: FormGroup;
  constructor(private serviceAuth : FirebaseauthService,
              private router:Router) { }

  ngOnInit(): void {
    this.myFormUser = new FormGroup({
      emailF: new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
      passwordF: new FormControl('',[Validators.required,Validators.minLength(5)])
    });
  }

  registerUser(){

    if(this.myFormUser.valid)
    {
      let {emailF,passwordF} = this.myFormUser.value;
      this.serviceAuth.register(emailF,passwordF);
      this.router.navigate(['/login'])
    }
    else
    {
      console.log("error")
    }
}

get emailF() {return this.myFormUser.get('emailF')}
get passwordF() {return this.myFormUser.get('passwordF')}


}
