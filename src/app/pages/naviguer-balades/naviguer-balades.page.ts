import { Component, OnInit } from '@angular/core';
import { Balade } from 'src/models/balade';
import { BALADES } from 'src/models/mock-balades';
import { DataService } from 'src/app/services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-naviguer-balades',
  templateUrl: './naviguer-balades.page.html',
  styleUrls: ['./naviguer-balades.page.scss'],
})
export class NaviguerBaladesPage implements OnInit {
  balades: Balade[] = BALADES;

  constructor(private router: Router, private dataService: DataService) { }


  ngOnInit() {
  }
// Récupere l'item de la liste et redirige vers la page details
// Stockes data dans le dataservice
// Route sur la page detail/:id où l'on récupère les data
itemSelected(item) {
  this.dataService.setData(10, item);
  this.router.navigateByUrl('/menu/naviguer/naviguer/naviguer-balades/details/10');
}
}