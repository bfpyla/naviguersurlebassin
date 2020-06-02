import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infos-balisage-details',
  templateUrl: './infos-balisage-details.page.html',
  styleUrls: ['./infos-balisage-details.page.scss'],
})
export class InfosBalisageDetailsPage implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // récupere les data stockees par le dataservice au moyen du dataresolver
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }
  }

}
