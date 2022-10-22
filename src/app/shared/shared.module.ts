import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PhoneFormatPipe } from './pipe/phone-format.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    ConfirmDialogComponent,
    PhoneFormatPipe,

  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmDialogComponent,
    PhoneFormatPipe
  ]
})
export class SharedModule { }
