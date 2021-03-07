import { Component, OnInit } from '@angular/core';
import { FirebaseauthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario: string;
  constructor(private serviceAuth : FirebaseauthService) { }

  ngOnInit(): void {
    this.serviceAuth.getCurrentUser().then(r=>{
      this.usuario=r.email

    })
  }



}
