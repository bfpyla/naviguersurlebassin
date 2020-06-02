import { Component, OnInit, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';



@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  refMareeArcachon: string;
  refMareeCapFerret: string;

  constructor(private menu: MenuController, public actionSheetController: ActionSheetController ) {
  }


  ngOnInit() {
    // Calcul de la date du jour pour l inserer dans url de demande de maree du jour
    const laDate = new Date();
    let dateJour = laDate.getDate();
    let dateMois = laDate.getMonth() + 1;
    let dateDuJour;
    if (dateJour < 10) {
        dateDuJour = laDate.getFullYear() + '-' + dateMois + '-' + '0' + laDate.getDate();
    }
    if (dateMois < 10) {
       dateDuJour = laDate.getFullYear() + '-' + '0' + dateMois + '-' + laDate.getDate();
     }
    if (dateMois < 10 && dateJour < 10) {
      dateDuJour = laDate.getFullYear() + '-' + '0' + dateMois + '-' + '0' + laDate.getDate();
    }
    console.log('my date', dateDuJour);
    this.refMareeArcachon = 'https://maree.shom.fr/harbor/ARCACHON_EYRAC/hlt/0?date=' + dateDuJour + '&utc=standard';
    this.refMareeCapFerret = 'https://maree.shom.fr/harbor/CAP_FERRET/hlt/0?date=' + dateDuJour + '&utc=standard';
  }
// Affichage de l'écran actionsheet
async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'Menu additionnel',
    buttons: [{
      text: 'Paramètres',
      icon: 'help',
      handler: () => {
        }
    },
    {
      text: 'Conditions d\'utilisation',
      icon: 'help',
      handler: () => {
        }
    },
     {
      text: 'Annuler',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}
}
