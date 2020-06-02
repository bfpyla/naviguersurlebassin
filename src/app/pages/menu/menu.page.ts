import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  pages = [
    {
      title: 'Accueil',
      url: '/menu/accueil'
    },
    {
      title: 'Naviguer',
      url: '/menu/naviguer'
    },
    {
      title: 'Infos',
      url: '/menu/infos'
    },
    {
      title: 'Marées',
      url: '/menu/marees'
    },
    {
      title: 'Sos',
      url: '/menu/sos'
    },
    {
      title: 'Contacts',
      url: '/menu/contacts'
    },
    {
      title: 'Navire',
      url: '/menu/navire'
    }
  ];

  constructor() {

  }

  ngOnInit() {

  }
}