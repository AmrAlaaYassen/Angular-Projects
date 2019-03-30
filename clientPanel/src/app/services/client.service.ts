import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Client} from '../models/Client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clients: Observable<Client[]>;
  client: AngularFireObject<Client>;

  constructor(public af: AngularFireDatabase) {
    this.clients = af.list<Client>('clients').valueChanges();
  }


  getClients() {
    return this.clients;
  }
}
