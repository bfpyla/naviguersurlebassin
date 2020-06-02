import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MareesPage } from './marees.page';

const routes: Routes = [
  {
    path: '',
    component: MareesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MareesPageRoutingModule {}
