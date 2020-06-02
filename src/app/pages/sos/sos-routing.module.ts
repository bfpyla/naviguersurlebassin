import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from 'src/app/resolver/data-resolver.service';
import { SosPage } from './sos.page';

const routes: Routes = [
  {
    path: 'sos',
    component: SosPage,
    children: [
      {
        path: 'sos-sos',
        loadChildren: () => import('../sos-sos/sos-sos.module').then( m => m.SosSosPageModule)
      },
      {
        path: 'sos-telsms',
        loadChildren: () => import('../sos-telsms/sos-telsms.module').then( m => m.SosTelsmsPageModule)
      },
      {
        path: 'sos-mail',
        loadChildren: () => import('../sos-mail/sos-mail.module').then( m => m.SosMailPageModule)
      },
      {
        path: '',
        redirectTo: 'sos/sos-sos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'sos/sos-sos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SosPageRoutingModule {}
