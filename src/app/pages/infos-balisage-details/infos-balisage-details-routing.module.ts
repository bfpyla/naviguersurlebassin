import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosBalisageDetailsPage } from './infos-balisage-details.page';

const routes: Routes = [
  {
    path: '',
    component: InfosBalisageDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosBalisageDetailsPageRoutingModule {}
