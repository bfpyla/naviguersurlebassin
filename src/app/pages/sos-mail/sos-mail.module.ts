import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosMailPageRoutingModule } from './sos-mail-routing.module';

import { SosMailPage } from './sos-mail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosMailPageRoutingModule
  ],
  declarations: [SosMailPage]
})
export class SosMailPageModule {}
