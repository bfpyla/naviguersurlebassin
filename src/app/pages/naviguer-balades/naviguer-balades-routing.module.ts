import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaviguerBaladesPage } from './naviguer-balades.page';

const routes: Routes = [
  {
    path: '',
    component: NaviguerBaladesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaviguerBaladesPageRoutingModule {}
