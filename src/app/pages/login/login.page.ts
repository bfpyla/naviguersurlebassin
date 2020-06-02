import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;

  @ViewChild('flipcontainer', { static: false }) flipcontainer: ElementRef;

  constructor(private fb: FormBuilder, private authService: AuthService, private loadingCtrl: LoadingController,
              private toastCtrl: ToastController, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required],
      role: ['USERS']
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
// Chargement de page en fonction du role
  navigateByRole(role) {
    if (role === 'USERS') {
      this.router.navigateByUrl('/menu/naviguer/naviguer/naviguer-localisation');
    } else if (role === 'ADMIN') {
      this.router.navigateByUrl('/menu/naviguer/naviguer/naviguer-localisation-admin');
    }
  }
// Connexion avec un compte deja cree
  async login() {
    let loading = await this.loadingCtrl.create({
      message: 'Chargement...'
    });
    await loading.present();

    this.authService.signIn(this.loginForm.value).subscribe(user => {
      console.log('avant dismiss', loading);
      loading.dismiss();
      console.log('apres dismiss', loading);
      console.log('Apres connexion: ', user);
      this.navigateByRole(user.role);
    },
    async err => {
      loading.dismiss();
      console.log('login erreur');
      let alert = await this.alertCtrl.create({
        header: 'Erreur  de connexion',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }
// Creation de compte
  async register() {
    let loading = await this.loadingCtrl.create({
      message: 'Chargement...'
    });
    await loading.present();

    this.authService.signUp(this.registerForm.value).then(async res => {
      await loading.dismiss();

      let toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Création de compte réussie!'
      });
      toast.present();
      console.log('finished: ', res);

      this.navigateByRole(this.registerForm.value.role);

    }, async err => {
      await loading.dismiss();

      let alert = await this.alertCtrl.create({
        header: 'Erreur',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }
// Chanhement d ecran entre connexion et creation
  toggleRegister() {
    this.flipcontainer.nativeElement.classList.toggle('flip');
  }
// Changement de password
  async openReset() {
    let inputAlert = await this.alertCtrl.create({
      header: 'Changer le mot de passe',
      inputs: [
        {
          name: 'email',
          placeholder: 'Entrer votre email'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Changer',
          handler: data => {
            this.resetPw(data.email);
          }
        }
      ]
    });
    inputAlert.present();
  }
// Reset du password
  resetPw(email) {
    this.authService.resetPw(email).then(
      async res => {
        let toast = await this.toastCtrl.create({
          duration: 3000,
          message: 'Réussite! Vérifier vos emails pour plus d\'informations.'
        });
        toast.present();
      },
      async err => {
        let alert = await this.alertCtrl.create({
          header: 'Erreur',
          message: err.message,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }
}
