import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosBeaufortPageRoutingModule } from './infos-beaufort-routing.module';

import { InfosBeaufortPage } from './infos-beaufort.page';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosBeaufortPageRoutingModule,
    SharedComponentsModule
  ],

  declarations: [InfosBeaufortPage]
})
export class InfosBeaufortPageModule {}
