import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn:boolean ;
  loggedInUser:string;
  showRegister:boolean;
  constructor(public authService:AngularFireAuth, private router:Router,private flashService:FlashMessagesService) { }


  async ngOnInit() {
    let auth = await this.getAuth();
    if(auth) { 
      this.isLoggedIn = true;
      this.loggedInUser = auth.email;
    } else { 
      this.isLoggedIn = false;
    }
     
    
  }


  getAuth() { 
    return this.authService.authState.pipe(first()).toPromise();
  }

  onLogOutClick() {
    this.authService.auth.signOut();
    this.isLoggedIn = false;
    this.loggedInUser = null;
    this.flashService.show("You are logged out", {cssClass:'alert alert-success', timeout:4000});
    this.router.navigate(['/login']); 
  }
}
