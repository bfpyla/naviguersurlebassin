import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-naviguer-localisation-admin',
  templateUrl: './naviguer-localisation-admin.page.html',
  styleUrls: ['./naviguer-localisation-admin.page.scss'],
})
export class NaviguerLocalisationAdminPage implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  signOut() {
    this.auth.signOut();
  }
}
