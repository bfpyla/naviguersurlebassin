import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosBeaufortPage } from './infos-beaufort.page';

const routes: Routes = [
  {
    path: '',
    component: InfosBeaufortPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosBeaufortPageRoutingModule {}
