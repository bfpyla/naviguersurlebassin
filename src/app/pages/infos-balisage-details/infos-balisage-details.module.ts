import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosBalisageDetailsPageRoutingModule } from './infos-balisage-details-routing.module';

import { InfosBalisageDetailsPage } from './infos-balisage-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosBalisageDetailsPageRoutingModule
  ],
  declarations: [InfosBalisageDetailsPage]
})
export class InfosBalisageDetailsPageModule {}
