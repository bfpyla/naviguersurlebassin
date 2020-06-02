import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-marees',
  templateUrl: './marees.page.html',
  styleUrls: ['./marees.page.scss'],
})
export class MareesPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  presentActionSheet(){

  }
 // alerte

async informationsSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Décalage des horaires',
    cssClass: '.academy-picker',
    mode: 'ios',
    buttons: [{
      text: 'Le Ferret : -30 mn',
    }, {
      text: 'Piraillan : -23 mn',
    }, {
      text: 'Le Canon  : -20 mn',
    }, {
      text: 'L\' Herbe   : -17 mn',
    }, {
      text: 'Ares      : +5 mn',
    }, {
      text: 'Andernos  : +10 mn',
    }, {
      text: 'La Teste  : +10 mn',
    }, {
      text: 'Gujan     : +12 mn',
    }, {
      text: 'Taussat   : +12 mn',
    }, {
      text: 'Audenge   : +15 mn',
    },
     {
      text: 'OK',
      icon: 'close',
      role: 'cancel',
    }]
  });
  await actionSheet.present();
} 
}
