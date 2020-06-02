import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-naviguer-balades-details',
  templateUrl: './naviguer-balades-details.page.html',
  styleUrls: ['./naviguer-balades-details.page.scss'],
})
export class NaviguerBaladesDetailsPage implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // récupere les data stockees par le dataservice au moyen du dataresolver
    if (this.route.snapshot.data.special) {
      this.data = this.route.snapshot.data.special;
    }
  }

}
