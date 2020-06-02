import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SosMailPage } from './sos-mail.page';

const routes: Routes = [
  {
    path: '',
    component: SosMailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosMailPageRoutingModule {}
