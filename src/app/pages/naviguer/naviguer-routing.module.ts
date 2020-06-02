import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataResolverService } from 'src/app/resolver/data-resolver.service';
import { NaviguerPage } from './naviguer.page';
import { AutomaticLoginGuard } from 'src/app/guards/automatic-login.guard';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RoleGuard } from 'src/app/guards/role.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

const routes: Routes = [
  {
    path: 'naviguer',
    component: NaviguerPage,
    children: [
      {
        path: 'naviguer-balades',
        loadChildren: () => import('../naviguer-balades/naviguer-balades.module').then( m => m.NaviguerBaladesPageModule)
      },
      {     path: 'naviguer-balades/details/:id',
               resolve: {
               special: DataResolverService
               },
               // tslint:disable-next-line: max-line-length
               loadChildren: () => import('../naviguer-balades-details/naviguer-balades-details.module').then( m => m.NaviguerBaladesDetailsPageModule)
      },
      {
        path: 'naviguer-gps',
        loadChildren: () => import('../naviguer-gps/naviguer-gps.module').then( m => m.NaviguerGpsPageModule)
      },
      {
        path: 'naviguer-localisation',
        loadChildren: () => import('../naviguer-localisation/naviguer-localisation.module').then( m => m.NaviguerLocalisationPageModule)
      },
      {
        path: 'naviguer-login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule),
        canActivate: [AutomaticLoginGuard]
      },
      {
        path: 'naviguer-localisation-admin',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => import('../naviguer-localisation-admin/naviguer-localisation-admin.module').then( m => m.NaviguerLocalisationAdminPageModule),
        canActivate: [AngularFireAuthGuard, RoleGuard],
         data: {
          authGuardPipe: redirectUnauthorizedToLogin,
          role: 'ADMIN'
    },
      },
      {
        path: '',
        redirectTo: 'naviguer/naviguer-balades',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'naviguer/naviguer-balades',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NaviguerPageRoutingModule {}
