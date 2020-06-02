import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { EchelledebeaufortComponent } from './echelledebeaufort/echelledebeaufort.component';



@NgModule({
  declarations: [EchelledebeaufortComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [EchelledebeaufortComponent]
})
export class SharedComponentsModule { }
