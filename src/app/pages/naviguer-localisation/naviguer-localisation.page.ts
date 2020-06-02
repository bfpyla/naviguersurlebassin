import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ActionSheetController , PopoverController, ToastController} from '@ionic/angular';
import { PopoveraidePage } from '../popoveraide/popoveraide.page';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-naviguer-localisation',
  templateUrl: './naviguer-localisation.page.html',
  styleUrls: ['./naviguer-localisation.page.scss'],
})
export class NaviguerLocalisationPage implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private router: Router, private authService: AuthService, public toastController: ToastController, public actionSheetController: ActionSheetController, private popoverController: PopoverController, ) { }

  ngOnInit() {
  }
async toastDeconnexion() {
    const toast = await this.toastController.create({
      color: 'dark',
      duration: 2000,
      message: 'Vous êtes déconnecté',
    });

    await toast.present();
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Menu additionnel',
      buttons: [{
        text: 'Connexion',
        icon: 'person-add-outline',
        handler: () => {
          this.connexionLogin();
          }
      },
      {
        text: 'Déconnexion',
        icon: 'person-remove-outline',
        role: 'click',
        handler: () => {
          // tslint:disable-next-line: new-parens
          this.toastDeconnexion();
          this.deconnexionLogin();
          }
      },
      {
        text: 'Mes localisations',
        icon: 'person-outline',
        handler: () => {
          this.mesLocalisations();
          }
      },
      {
        text: 'Les autres localisations',
        icon: 'people-outline',
        handler: () => {
          this.autresLocalisations();
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

// ouvrir la page login qui permet la connexion a firebase
connexionLogin(){
  this.router.navigateByUrl('/menu/naviguer/naviguer/naviguer-login');
}
// deconnexion de la personne de firebase
deconnexionLogin() {
  this.authService.signOut();
}
// deconnexion de la personne de firebase
mesLocalisations() {
}
// deconnexion de la personne de firebase
autresLocalisations() {
}
}
