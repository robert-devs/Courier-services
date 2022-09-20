import { Component, OnInit } from '@angular/core';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  faTruck = faTruck;
  constructor() {}

  ngOnInit(): void {}
}
