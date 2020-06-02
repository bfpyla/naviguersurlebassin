import { Component, OnInit } from '@angular/core';
import { Balise } from 'src/models/balise';
import { BALISES } from 'src/models/mock-balises';
import { DataService } from 'src/app/services/data.service';
import { Router, NavigationExtras } from '@angular/router';
import { ActionSheetController , PopoverController} from '@ionic/angular';
import { PopoveraidePage } from '../popoveraide/popoveraide.page';

@Component({
  selector: 'app-infos-balisage',
  templateUrl: './infos-balisage.page.html',
  styleUrls: ['./infos-balisage.page.scss'],
})
export class InfosBalisagePage implements OnInit {
  balises: Balise[] = BALISES;
// Valeur a passer dans popover pour determiner la page

  constructor(private router: Router, private dataService: DataService, public actionSheetController: ActionSheetController, private popoverController: PopoverController, ) { }


  ngOnInit() {
  }
// Récupere l'item de la liste et redirige vers la page details
// Stockes data dans le dataservice
// Route sur la page detail/:id où l'on récupère les data
itemSelected(item) {
  this.dataService.setData(10, item);
  this.router.navigateByUrl('/menu/infos/infos/infos-balisage/details/10');
}
async presentActionSheet() {
const actionSheet = await this.actionSheetController.create({
  header: 'Menu additionnel',
  buttons: [{
    text: 'Introduction',
    icon: 'chatbubble-ellipses-outline',
    handler: () => {
      this.openPopoverAide(4);
      }
  },
  {
    text: 'Le système cardinal',
    icon: 'chatbubble-ellipses-outline',
    role: 'click',
    handler: () => {
      // tslint:disable-next-line: new-parens
      this.openPopoverAide(1);
      }
  },
  {
    text: 'Le système latéral',
    icon: 'chatbubble-ellipses-outline',
    handler: () => {
      this.openPopoverAide(2);
      }
  },
  {
    text: 'Les autres marques',
    icon: 'chatbubble-ellipses-outline',
    handler: () => {
      this.openPopoverAide(3);
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
//  Ouvrir la page PopoverAide
async openPopoverAide(valeur) {
  const popover = await this.popoverController.create({
    component: PopoveraidePage,
    componentProps: {
      custom_id: valeur,
      cssClass: 'pop-over-aide'
    },
  });
  popover.present();
}
}
