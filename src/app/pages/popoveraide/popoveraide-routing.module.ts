import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoveraidePage } from './popoveraide.page';

const routes: Routes = [
  {
    path: '',
    component: PopoveraidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopoveraidePageRoutingModule {}
