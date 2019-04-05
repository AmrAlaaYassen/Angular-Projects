import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string;
  client:Client = {
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    balance:0
  }
  hasBalance:Boolean = false;
  disabledBalanceOnEdit:boolean = true;

  constructor(public clientService: ClientService, public flashService: FlashMessagesService, public router: Router, public route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe( client => {
      if(client.balance > 0) { 
        this.hasBalance = true;
      }
      this.client = client;
    })
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    if(!valid) {
      this.flashService.show('Please Fill in all fields', {cssClass : 'alert alert-danger', timeout:4000});
      this.router.navigate(['edit-client/'+this.id]);
    } else {
      this.clientService.updateClient(this.id,value);
      this.flashService.show('Client Updated Successfully', {cssClass:'alert alert-success', timeout:4000});
      this.router.navigate(['/client/'+this.id]);
    }
  }

}
