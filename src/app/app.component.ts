import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menuItems = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Quiz lists',
      url: '/quiz-list',
      icon: 'albums-outline',
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings-outline',
    },
    // Add more menu items as needed
  ];

  constructor() {}
}
