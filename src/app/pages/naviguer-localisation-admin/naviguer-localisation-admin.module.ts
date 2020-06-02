import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaviguerLocalisationAdminPageRoutingModule } from './naviguer-localisation-admin-routing.module';

import { NaviguerLocalisationAdminPage } from './naviguer-localisation-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaviguerLocalisationAdminPageRoutingModule
  ],
  declarations: [NaviguerLocalisationAdminPage]
})
export class NaviguerLocalisationAdminPageModule {}
