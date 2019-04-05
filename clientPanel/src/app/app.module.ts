import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms'
import { FlashMessagesModule,FlashMessagesService } from 'angular2-flash-messages';

import {AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import {AuthGuard} from './guards/auth.guard';
import {ClientService} from './services/client.service';
const appRoutes : Routes = [
  {path :'', component:DashboardComponent, canActivate:[AuthGuard]},
  {path : 'register', component:RegisterComponent},
  {path : 'login', component:LoginComponent},
  {path : 'add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  {path : 'client/:id', component:ClientDetailsComponent , canActivate:[AuthGuard]},
  {path : 'edit-client/:id', component:EditClientComponent, canActivate:[AuthGuard]}
];


export const environment = {

  apiKey: "AIzaSyDBjaHC3Ij1llnniQSqNyMDnpBJ47Otttw",
  authDomain: "clientpanel-ec2ce.firebaseapp.com",
  databaseURL: 'https://clientpanel-ec2ce.firebaseio.com',
  storageBucket: "clientpanel-ec2ce.appspot.com",
  messagingSenderId: "164976792952"

};
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
    AngularFireDatabase,
    ClientService,
    FlashMessagesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
