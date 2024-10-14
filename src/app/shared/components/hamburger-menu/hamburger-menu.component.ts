// hamburger-menu.component.ts
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterModule, CommonModule],
  template: `
    <mat-sidenav-container>
      <mat-sidenav #sidenav mode="side" opened>
        <mat-nav-list>
          <a mat-list-item *ngFor="let link of links" [routerLink]="link.path">{{ link.label }}</a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <button (click)="toggleMenu(sidenav)">Toggle Menu</button>
        <!-- Contenido de la página -->
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class HamburgerMenuComponent {
  links = [
    { label: 'Home', path: '/home' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Settings', path: '/settings' },
    { label: 'Profile', path: '/profile' },
    { label: 'Help', path: '/help' },
    { label: 'Logout', path: '/logout' },
    // Agrega más enlaces aquí
  ];

  toggleMenu(sidenav: any) {
    sidenav.toggle();  // Asegúrate de que estás pasando el sidenav
  }
}
