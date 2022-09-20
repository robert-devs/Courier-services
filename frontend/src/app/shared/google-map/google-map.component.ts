import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 0.0236,
    lng: 37.9062,
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 8;
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
}
