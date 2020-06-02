import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosPortsDetailsPageRoutingModule } from './infos-ports-details-routing.module';

import { InfosPortsDetailsPage } from './infos-ports-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosPortsDetailsPageRoutingModule
  ],
  declarations: [InfosPortsDetailsPage]
})
export class InfosPortsDetailsPageModule {}
