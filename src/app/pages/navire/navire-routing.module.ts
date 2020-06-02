import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavirePage } from './navire.page';

const routes: Routes = [
  {
    path: 'navire',
    component: NavirePage,
    children: [
      {
        path: 'navire-infos',
        loadChildren: () => import('../navire-infos/navire-infos.module').then( m => m.NavireInfosPageModule)
      },
      {
        path: 'navire-sorties',
        loadChildren: () => import('../navire-sorties/navire-sorties.module').then( m => m.NavireSortiesPageModule)
      },
      {
        path: '',
        redirectTo: 'navire/navire-infos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'navire/navire-infos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavirePageRoutingModule {}
