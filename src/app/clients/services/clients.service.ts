import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

import { Client } from './../model/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private readonly API = `${environment.API}clients`;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Client[]>(this.API).pipe(first());
  }

  private create(client: Client) {
    return this.httpClient.post<Client>(this.API, client).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Client>(`${this.API}/${id}`).pipe(first());
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  private update(client: Client) {
    return this.httpClient
      .put<Client>(`${this.API}/${client.id}`, client)
      .pipe(first());
  }

  save(client: Client) {
    if (client.id) {
      return this.update(client);
    }
    return this.create(client);
  }
}
