import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'store-sync-error';
  router = inject(Router);

  public routeToTasks() {
    this.router.navigate(['tasks']);
  }

  public routeHome() {
    this.router.navigate(['']);
  }
}
