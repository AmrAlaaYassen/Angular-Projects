import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from 'src/app/models/Client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client
  hasBalance: boolean = false;
  showBalanceUpdatedInput: boolean = false;
  constructor(public clientService: ClientService, public flashService: FlashMessagesService, public router: Router, public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.clientService.getClient(this.id).subscribe(client => {
      if (client.balance > 0) {
        this.hasBalance = true;
      }

      this.client = client;
      console.log(this.client);

    })
  }

  updateBalance(id: string) {
    this.clientService.updateClient(this.id, this.client);
    this.flashService.show("Balance Updated", { cssClass: 'alert-success', timeout: 4000 });
    this.router.navigate(['/client/' + this.id]);
  }

  onDeleteClick() {
    if (confirm("Are You sure to Delete?")) {
      this.clientService.deleteClient(this.id);
      this.flashService.show("Client Deleted", { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/']);
    }
  }

}
