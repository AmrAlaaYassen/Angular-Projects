import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Client} from '../models/Client';
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(public af: AngularFireDatabase) {
    this.clients = af.list<Client>('clients').snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    );
  }


  getClients() {
    return this.clients;
  }

  getClient(id) { 
    this.client = this.af.object('/clients/'+ id).valueChanges();
    return this.client;
  }
  addNewClient(client:Client) {
    this.af.list<Client>('clients').push(client);
  }
}
