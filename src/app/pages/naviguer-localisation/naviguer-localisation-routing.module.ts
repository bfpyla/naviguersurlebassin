import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaviguerLocalisationPage } from './naviguer-localisation.page';

const routes: Routes = [
  {
    path: '',
    component: NaviguerLocalisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaviguerLocalisationPageRoutingModule {}
