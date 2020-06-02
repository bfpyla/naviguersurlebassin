import { Component, OnInit } from '@angular/core';
import { Beaufort } from 'src/models/beaufort';
import { BEAUFORTS } from 'src/models/mock-beauforts';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infos-beaufort',
  templateUrl: './infos-beaufort.page.html',
  styleUrls: ['./infos-beaufort.page.scss'],
})
export class InfosBeaufortPage implements OnInit {
  beauforts: Beaufort[] = BEAUFORTS;
  information: any[];

  automaticClose = false;
  constructor(private http: HttpClient) { 
    this.http.get('assets/information.json').subscribe(res => {

      this.information = res['items'];
      this.information[0].open = true;

    });


  }
toggleSection(index) {
  this.information[index].open = ! this.information[index].open;

  if (this.automaticClose  && this.information[index].open) {
    this.information
   .filter((item, itemIndex) => itemIndex !== index)
   .map(item => item.open = false);

   }
  }

toggleItem(index, childIndex) {

  this.information[index].children[childIndex].open = ! this.information[index].open;
  }
getcolor(index) {
  switch (index) {
    case 0:
      return '#ffeb99';
    case 1:
      return '#ffe680';
    case 2:
      return '#ffe680';
    case 3:
      return '#ffe066';
    case 4:
      return '#ffdb4d';
    case 5:
      return '#ffd11a';
    case 6:
      return '#ffcc00';
    case 7:
      return '#e6b800';
    case 8:
      return '#ffad99';
    case 9:
      return '#ff944d';
    case 10:
      return '#ff7511';
    case 11:
      return '#ff4d4d';
    case 12:
      return '#ff0000';
    default:
      return 'green';
  }
}


  ngOnInit() {
  }

}

