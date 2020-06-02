import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaviguerGpsPage } from './naviguer-gps.page';

const routes: Routes = [
  {
    path: '',
    component: NaviguerGpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaviguerGpsPageRoutingModule {}
