import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SosTelsmsPageRoutingModule } from './sos-telsms-routing.module';

import { SosTelsmsPage } from './sos-telsms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SosTelsmsPageRoutingModule
  ],
  declarations: [SosTelsmsPage]
})
export class SosTelsmsPageModule {}
