import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosPortsPage } from './infos-ports.page';

const routes: Routes = [
  {
    path: '',
    component: InfosPortsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosPortsPageRoutingModule {}
