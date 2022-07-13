import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CrudService } from './../../shared/crud/crud.service';
import { Client } from './../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends CrudService<Client> {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient, "clients");
  }


}
