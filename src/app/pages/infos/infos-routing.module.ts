import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from 'src/app/resolver/data-resolver.service';
import { InfosPage } from './infos.page';

const routes: Routes = [
  {
    path: 'infos',
    component: InfosPage,
    children: [
      {     path: 'infos-ports',
            loadChildren: () => import('../infos-ports/infos-ports.module').then( m => m.InfosPortsPageModule)
      },
      {     path: 'infos-ports/details',
            loadChildren: () => import('../infos-ports-details/infos-ports-details.module').then( m => m.InfosPortsDetailsPageModule)
      },
      {     path: 'infos-ports/details/:id',
               resolve: {
               special: DataResolverService
               },
               loadChildren: () => import('../infos-ports-details/infos-ports-details.module').then( m => m.InfosPortsDetailsPageModule)
      },
      {
            path: 'infos-balisage',
            loadChildren: () => import('../infos-balisage/infos-balisage.module').then( m => m.InfosBalisagePageModule)
      },
      {     path: 'infos-balisage/details',
            // tslint:disable-next-line: max-line-length
            loadChildren: () => import('../infos-balisage-details/infos-balisage-details.module').then( m => m.InfosBalisageDetailsPageModule)
      },
      {     path: 'infos-balisage/details/:id',
               resolve: {
               special: DataResolverService
               },
               // tslint:disable-next-line: max-line-length
               loadChildren: () => import('../infos-balisage-details/infos-balisage-details.module').then( m => m.InfosBalisageDetailsPageModule)
      },
      {
            path: 'infos-beaufort',
            loadChildren: () => import('../infos-beaufort/infos-beaufort.module').then( m => m.InfosBeaufortPageModule)
      },
      {
            path: 'infos-peche',
            loadChildren: () => import('../infos-peche/infos-peche.module').then( m => m.InfosPechePageModule)
      },
      {
        path: '',
        redirectTo: 'infos/infos-ports',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'infos/infos-ports',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosPageRoutingModule {}
