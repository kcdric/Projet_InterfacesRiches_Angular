import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

import * as L from 'leaflet';
import { Waypoint } from '../model/waypoint';
@Component({
  selector: 'app-maps',
  
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
	waypoints : Waypoint[] 
  	constructor(private http: HttpClient) { }
	ngOnInit(){
		const myfrugalmap = L.map('frugalmap').setView([30, -100], 4);
		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: 'Frugal Map'}).addTo(myfrugalmap);
		const myIcon = L.icon({
		iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
		});
		this.http.get('./assets/chapters.json', {responseType:'json'}).subscribe(data => {
			this.waypoints = data['Waypoints'];
			this.waypoints.forEach(wp => { 
				L.marker([wp.lat, wp.lng], {icon: myIcon}).bindPopup(wp.label).addTo(myfrugalmap);
			});
		}); 
	}
	

}
