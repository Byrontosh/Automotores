import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myFormUser: FormGroup;
  constructor(private serviceAuth : FirebaseauthService,
    private router:Router) { }

  ngOnInit(): void {
    this.myFormUser = new FormGroup({
      usuarioF: new FormControl(''),
      passwordF: new FormControl('')
    });
  }

  async loginUser(){

    let {usuarioF,passwordF} = this.myFormUser.value;
    const user = await this.serviceAuth.login(usuarioF,passwordF)
    if(user){
      this.router.navigate(['/dashboard'])
    }
    
}

}
