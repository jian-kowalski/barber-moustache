import { MatSnackBar } from '@angular/material/snack-bar';
import { Problem } from './../../shared/model/problem';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { ConfirmDialogComponent } from './../../shared/components/confirm-dialog/confirm-dialog.component';
import { Client } from './../model/client';
import { ClientsService } from './../services/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  clients$: Observable<Client[]>;
  displayedColumns = ['name', 'phone', 'actions'];
  // @ViewChild(MatTable) table: MatTable<Client>;

  constructor(
    private service: ClientsService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.clients$ = this.service.list().pipe(
      catchError((err) => {
        this.onError(err);
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onError(problem: Problem) {
    this.dialog.open(ErrorDialogComponent,  {
      data: problem,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(id: string){
    this.router.navigate(['edit', id], {relativeTo: this.route});
  }

  onDelete(client: Client){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: `Deseja exluir o cliente ${client.name}?`,
    }).afterClosed().subscribe(res => {
      if (res) {
         this.service.delete(client.id).subscribe(
           sucess => {},
           res => this.onError(res)
         );
      }

    });

  }


}
