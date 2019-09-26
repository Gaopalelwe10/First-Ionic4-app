import { Component, OnInit } from '@angular/core';
import {Map,tileLayer} from "leaflet"
declare var L;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  map: Map;
  searchControl;
  constructor() { }

  ngOnInit() {


  }
  ionViewDidEnter() {
    this.show();
  }


  
  show() {
    this.map = new Map('myMap').setView([-25.746, 28.1879], 10);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
   
  }
}
