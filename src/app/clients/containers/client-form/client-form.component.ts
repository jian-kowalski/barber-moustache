import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Problem } from '../../../shared/model/problem';
import { Client } from '../../model/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    name: ['', [ Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: ClientsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private location: Location,
    private route: ActivatedRoute
  ) {
    const client: Client = this.route.snapshot.data['client'];
    this.form.setValue(client);
  }

  ngOnInit(): void {}

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      () => {
        this.onSucess();
        this.onCancel();
      },
      (e) => this.onError(e.error)
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this.snackBar.open('Salvo com sucesso!', '', { duration: 5000 });
  }

  private onError(err: Problem) {
    this.dialog.open(ErrorDialogComponent, {
      data: err,
    });
  }
}
