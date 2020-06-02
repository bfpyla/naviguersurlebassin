import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-echelledebeaufort',
  templateUrl: './echelledebeaufort.component.html',
  styleUrls: ['./echelledebeaufort.component.scss'],
})
export class EchelledebeaufortComponent implements OnInit {
  @Input('echelledebeaufort') echelledebeaufort: any;

  constructor(private toastCtrl: ToastController) { }
    ngOnInit() {

    }
    async buyItem(product) {
      let toast = await this.toastCtrl.create({
        message: 'Ajouter au caddie: ${echelledebeaufort.descriptif}'
      });
      toast.present();
    }
  }