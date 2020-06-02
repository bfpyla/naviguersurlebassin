import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SosTelsmsPage } from './sos-telsms.page';

const routes: Routes = [
  {
    path: '',
    component: SosTelsmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosTelsmsPageRoutingModule {}
