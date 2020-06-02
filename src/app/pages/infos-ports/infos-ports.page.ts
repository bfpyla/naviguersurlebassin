import { Component, OnInit } from '@angular/core';
import { Port } from 'src/models/port';
import { PORTS } from 'src/models/mock-ports';
import { DataService } from 'src/app/services/data.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-infos-ports',
  templateUrl: './infos-ports.page.html',
  styleUrls: ['./infos-ports.page.scss'],
})
export class InfosPortsPage implements OnInit {
  ports: Port[] = PORTS;

  constructor(private router: Router, private dataService: DataService) { }


  ngOnInit() {
  }
// Récupere l'item de la liste et redirige vers la page details
// Stockes data dans le dataservice
// Route sur la page detail/:id où l'on récupère les data
itemSelected(item) {
  this.dataService.setData(10, item);
  this.router.navigateByUrl('/menu/infos/infos/infos-ports/details/10');
}
}
