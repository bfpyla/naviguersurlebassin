import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
  path: 'menu',
  component: MenuPage,
  children: [
    {
      path: 'accueil',
      loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
    },
    {
      path: 'naviguer',
      loadChildren: () => import('../naviguer/naviguer.module').then( m => m.NaviguerPageModule)
    },
    {
      path: 'infos',
      loadChildren: () => import('../infos/infos.module').then( m => m.InfosPageModule)
    },
    {
      path: 'sos',
      loadChildren: () => import('../sos/sos.module').then( m => m.SosPageModule)
    },
    {
      path: 'marees',
      loadChildren: () => import('../marees/marees.module').then( m => m.MareesPageModule)
    },
    {
      path: 'contacts',
      loadChildren: () => import('../contacts/contacts.module').then( m => m.ContactsPageModule)
    },
    {
      path: 'navire',
      loadChildren: () => import('../navire/navire.module').then( m => m.NavirePageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
    }
  ]
},
{
  path: '',
  redirectTo: '/menu/accueil',
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
