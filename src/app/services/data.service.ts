import { Injectable } from '@angular/core';
import { Port } from 'src/models/port';
import { Balise } from 'src/models/balise';
import { PORTS } from 'src/models/mock-ports';
import { BALISES } from 'src/models/mock-balises';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // declaration dataDetail
    private data = [];
    constructor() { }
  // Stockes data dans le cas de passing data entre 2 composants avec id
    setData(id, data) {
      this.data[id] = data;
  //    console.log(this.data[id]);
    }
  // Obtient les data  avec id stocké auparavant
    getData(id) {
  //   console.log(this.data[id]);
      return this.data[id];
    }
  // Test
    getConsole() {
    }
  // Retourne la liste de tous les ports
  //getPorts(): Port[]{
  //  return PORTS;
  //}
  // Retourne la liste de tous les ports
  // Retourne le port avec l'identifiant passé en paramètre
  //  getPortId(id: number): Port{
  //    let ports = this.getPorts("tab1page2");
  //    for (let index = 0; index < ports.length; index++){
  //      if(id === ports[index].id){
  //        return ports[index]
  //      }
  //    }
  //  }
  }
  