import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NaviguerLocalisationAdminPage } from './naviguer-localisation-admin.page';

const routes: Routes = [
  {
    path: '',
    component: NaviguerLocalisationAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaviguerLocalisationAdminPageRoutingModule {}
