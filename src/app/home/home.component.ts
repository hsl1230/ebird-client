import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  position: any = {};

  constructor( ) { }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.position.latitude = position.coords.latitude;
        this.position.longitude = position.coords.longitude;
        this.position.altitude = position.coords.altitude;
        this.position.speed = position.coords.speed;
      });
    }
  }

// https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=14%20shannon%20cres%20sw%20calgary%20canada&inputtype=textquery&fields=formatted_address,name,geometry&key=AIzaSyDeA2f1iSKcKUPWApkquheKVBqxhk8C-Ns
}
