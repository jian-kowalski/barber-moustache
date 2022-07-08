import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Client } from './../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly API = "/assets/clients.json";

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Client[]>(this.API).pipe(first());
    }
}
