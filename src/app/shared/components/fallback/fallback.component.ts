import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-fallback',
  templateUrl: './fallback.component.html',
  styleUrls: ['./fallback.component.css']
})
export class FallbackComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.redirect();
  }

  private async redirect() {
    const isAuthorized = await this.authService.isAuthorised;
    if (isAuthorized) {
        this.router.navigate(['/courses']);
    } else {
        this.router.navigate(['/login']);
    }
  }
}
