import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';

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

  currentMode: string = '';

  constructor(
    private themeService: ThemeService
  ) {
    // toggle listener
    this.themeService.toggleState$.subscribe((isToggled) => {
      // Handle toggle state changes here
      if (isToggled) {
        // dark theme
        this.themeService.toggleMode();
      } else {
        // light theme
        this.themeService.toggleMode();
      }
    });

    // theme listener
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });
  }
  
}
