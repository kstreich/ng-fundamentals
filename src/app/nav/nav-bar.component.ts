import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./nav-bar.component.html",
  styles: [
    `
      .nav.nav-bar {
        font-size: 15px;
      }
      li > a.active {
        color: #f97924;
      }
    `
  ]
})
export class NavBarComponent {}
