import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  isDarkMode: boolean = false;

  headerClass: string = '';
  contentClass: string = '';
  currentMode: string = '';

  constructor(
    private themeService: ThemeService
  ) {
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });
   }

  ngOnInit() {
  }

  toggleDarkMode(event) {
    const isToggled = event.detail.checked;
    this.themeService.toggleMode();
  }

}
