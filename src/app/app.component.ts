import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  links = [
    "Home",
    "Floating Text Page",
    "e-Commerce Page",
    "Timer App Page",
    "Timer App v2 Page",
    "Student Marks Page",
    "Dynamic DIV Page"
  ];

  activeLink = this.links[0];
}
