import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth-service/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {

  constructor(private route: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    this.route.navigate(['/']);
  }
}
