import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavireInfosPage } from './navire-infos.page';

const routes: Routes = [
  {
    path: '',
    component: NavireInfosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavireInfosPageRoutingModule {}
