import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosPortsDetailsPage } from './infos-ports-details.page';

const routes: Routes = [
  {
    path: '',
    component: InfosPortsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosPortsDetailsPageRoutingModule {}
