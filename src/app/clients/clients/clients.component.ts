import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from '../model/client';
import { ClientsService } from './../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Observable<Client[]>;
  displayedColumns = ["name", "phone"];



  constructor(private clientsService: ClientsService) {
    this.clients = this.clientsService.list();
  }

  ngOnInit(): void {
  }

}
