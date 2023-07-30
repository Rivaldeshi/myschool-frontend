import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {


  constructor(
    private router: Router
  ) { }

  showNavBarAndFooter = false;
  private sub: Subscription = new Subscription;
  title = 'myShoolApp';

  ngOnInit(): void {
    this.updateNavBarAndFooter();

    this.sub = this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateNavBarAndFooter();
        } else {
          this.updateNavBarAndFooter();
        }
      });

  }

  updateNavBarAndFooter() {
    let bool = document.URL
      && !document.URL.includes('register')
      && !document.URL.includes('login')

    if (this.showNavBarAndFooter != bool)
      this.showNavBarAndFooter = bool as boolean;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
