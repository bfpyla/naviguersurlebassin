import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosPortsPageRoutingModule } from './infos-ports-routing.module';

import { InfosPortsPage } from './infos-ports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosPortsPageRoutingModule
  ],
  declarations: [InfosPortsPage]
})
export class InfosPortsPageModule {}
