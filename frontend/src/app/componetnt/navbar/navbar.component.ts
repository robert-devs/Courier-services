import { Component, OnInit } from '@angular/core';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faTruck = faTruck;
  constructor(public authService: AuthServiceService) {}

  ngOnInit(): void {}
  onDelete() {}
}
