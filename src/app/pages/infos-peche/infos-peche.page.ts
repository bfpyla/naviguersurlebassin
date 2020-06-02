import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infos-peche',
  templateUrl: './infos-peche.page.html',
  styleUrls: ['./infos-peche.page.scss'],
})
export class InfosPechePage implements OnInit {
  sliderConfig = {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 5,
//    centeredSlides: true
  };
  peche: any[];

  automaticClose = false;
  constructor(private http: HttpClient) {
    this.http.get('assets/peche.json').subscribe(res => {

      this.peche = res['items'];
      this.peche[0].open = true;

    });


  }
toggleSection(index) {
this.peche[index].open = ! this.peche[index].open;

if (this.automaticClose  && this.peche[index].open) {
   this.peche
     .filter((item, itemIndex) => itemIndex !== index)
     .map(item => item.open = false);
    }
  }

toggleItem(index, childIndex) {

  this.peche[index].children[childIndex].open = ! this.peche[index].open;
}
getcolor(index) {
  switch (index){
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

