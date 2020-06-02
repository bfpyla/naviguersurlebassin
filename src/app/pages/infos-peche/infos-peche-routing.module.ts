import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosPechePage } from './infos-peche.page';

const routes: Routes = [
  {
    path: '',
    component: InfosPechePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosPechePageRoutingModule {}
