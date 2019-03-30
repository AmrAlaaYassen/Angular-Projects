import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  client: Client = {
    key:'',
    firstName: '',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  };

  disableBalanceOnAdd:boolean = false;
  constructor(public flashService:FlashMessagesService, public router:Router, public clientService:ClientService)  { }

  ngOnInit() {
  }

  onSubmit({value, valid} : {value:Client,valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance = 0;
    }
    if(!valid) {
      this.flashService.show('Please Fill in all fields', {cssClass : 'alert alert-danger', timeout:4000});
      this.router.navigate(['add-client']);
    } else {
      this.clientService.addNewClient(value);
      this.flashService.show('Client Added Successfully', {cssClass:'alert alert-success', timeout:4000});
      this.router.navigate(['/']);
    }
  }

}
