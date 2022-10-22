import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { IndexComponent } from './components/index.component';
import { IndexRoutingModule } from './index-routing.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    AppMaterialModule
  ]
})
export class IndexModule { }
