import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Aide } from 'src/models/aide';
import { AIDES } from 'src/models/mock-aides';

@Component({
  selector: 'app-popoveraide',
  templateUrl: './popoveraide.page.html',
  styleUrls: ['./popoveraide.page.scss'],
})
export class PopoveraidePage implements OnInit {
  aides: Aide[] = AIDES;
  constructor(private navParams: NavParams, private popoverController: PopoverController) { }

  passedId = null;
  dateDuJour = null;
  now = null;

  ngOnInit() {
    this.passedId = this.navParams.get('custom_id');
    console.log('my id', this.passedId);
    this.now = new Date();
    this.dateDuJour = this.now.getDate() + '/' + (this.now.getMonth() + 1) + '/' + this.now.getFullYear();
  }

  closePopover() {
    this.popoverController.dismiss();

  }
}
