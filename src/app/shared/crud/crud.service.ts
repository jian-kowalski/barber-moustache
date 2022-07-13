import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { first } from 'rxjs';
import { Crud } from './crud';

@Injectable({
  providedIn: 'root',
})
export class CrudService<T extends Crud> {
  private readonly API = `${environment.API}`;

  constructor(protected httpClient: HttpClient, @Inject('API_URI') private API_URI: string) {}

  protected getApi(): string {
    return `${this.API}${this.API_URI}`;
  }

  list() {
    return this.httpClient.get<T[]>(this.getApi()).pipe(first());
  }

  private create(record: T) {
    return this.httpClient.post<T>(this.getApi(), record).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<T>(`${this.getApi()}/${id}`).pipe(first());
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.getApi()}/${id}`).pipe(first());
  }

  private update(record: T) {
    return this.httpClient
      .put<T>(`${this.getApi()}/${record.id}`, record)
      .pipe(first());
  }

  save(record: T) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }
}
