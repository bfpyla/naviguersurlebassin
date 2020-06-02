import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaviguerLocalisationPageRoutingModule } from './naviguer-localisation-routing.module';

import { NaviguerLocalisationPage } from './naviguer-localisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaviguerLocalisationPageRoutingModule
  ],
  declarations: [NaviguerLocalisationPage]
})
export class NaviguerLocalisationPageModule {}
