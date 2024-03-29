import { ClientResolverGuard } from './guards/client-resolver.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientFormComponent } from './containers/client-form/client-form.component';
import { ClientsComponent } from './containers/clients/clients.component';

const routes: Routes = [
  { path: '', component: ClientsComponent },
  {
    path: 'new',
    component: ClientFormComponent,
    resolve: {
      client: ClientResolverGuard,
    },
  },
  {
    path: 'edit/:id',
    component: ClientFormComponent,
    resolve: {
      client: ClientResolverGuard,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
