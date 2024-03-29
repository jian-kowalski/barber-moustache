import { Client } from './../../model/client';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { Problem } from '../../../shared/model/problem';

import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]>;

  constructor(
    private service: ClientsService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clients$ = this.loadClients();
  }

  loadClients():Observable<Client[]> {
    return this.service.lisPagination().pipe(
      catchError((err) => {
        this.onError(err);
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onError(problem: Problem) {
    this.dialog.open(ErrorDialogComponent, {
      data: problem,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(client: Client) {
    this.router.navigate(['edit', client.id], { relativeTo: this.route });
  }

  onDelete(client: Client) {
    this.dialog
      .open(ConfirmDialogComponent, {
        data: `Deseja exluir o cliente ${client.name}?`,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.service.delete(client.id).subscribe(
            () => {this.clients$ = this.loadClients()},
            (res) => this.onError(res)
          );
        }
      });
  }
}
