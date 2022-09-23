import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ParcelService } from 'src/app/Services/Parcel-service.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  id!: string;
  constructor(private parcelService: ParcelService) {}

  ngOnInit(): void {
    this.getAll();
  }
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 0.0236,
    lng: 37.9062,
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: 0.0236,
      lng: 37.9062,
    },
    {
      lat: 0.0236,
      lng: 37.9062,
    },
  ];
  zoom = 8;
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }

  getAll() {
    this.parcelService.getParcels().subscribe((res) => {
      let parcel = res.filter((parcel) => parcel.parcelId == this.id);

      const coordinates = parcel.map((parcel) => ({
        lat: parcel.destination,
        lng: parcel.destination,
      }));

      // this.markerPositions = JSON.parse(JSON.parse.coordinates);
      console.log();
    });
  }
}
