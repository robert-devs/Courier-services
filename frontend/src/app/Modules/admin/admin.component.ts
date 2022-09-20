import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  @HostListener('mouseenter') onMouseEnter() {
    this;
  }

  constructor(private router: Router) {}
  faTruck = faTruck;
  ngOnInit(): void {}

  goToViewOrder() {
    // console.log(this.goToViewOrder);
    this.router.navigate(['/admin/view-order']);
  }
  goTousers() {
    this.router.navigate(['/admin/users']);
  }
  goToAddOdrder() {
    this.router.navigate(['/admin/status']);
  }

  goToStatus() {
    this.router.navigate(['/admin/add-orders']);
  }
}
