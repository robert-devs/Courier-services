import { Component, OnInit } from '@angular/core';
import { faTrainSubway, faBox } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  faTrainSubway = faTrainSubway;
  faBox = faBox;
  constructor() {}

  ngOnInit(): void {}
}
