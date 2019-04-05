import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(public authService:AngularFireAuth, private router:Router,private flashService:FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.auth.signInWithEmailAndPassword(this.email,this.password).then((res) => {
      this.flashService.show('Login Successfully', {cssClass:'alert alert-success', timeout:4000});
      this.router.navigate(['/dashboard']);
    }).catch((err) => {
      this.flashService.show(err.message, {cssClass:'alert alert-danger', timeout:4000});
      this.router.navigate(['/login']); 
    })
  }

}
