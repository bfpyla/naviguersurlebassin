import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavireSortiesPageRoutingModule } from './navire-sorties-routing.module';

import { NavireSortiesPage } from './navire-sorties.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavireSortiesPageRoutingModule
  ],
  declarations: [NavireSortiesPage]
})
export class NavireSortiesPageModule {}
