import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaviguerBaladesDetailsPage } from './naviguer-balades-details.page';

const routes: Routes = [
  {
    path: '',
    component: NaviguerBaladesDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaviguerBaladesDetailsPageRoutingModule {}
