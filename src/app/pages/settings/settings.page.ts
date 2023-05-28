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
    // get theme current mode
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });

    // get toggle last state
    const toggleLastState = localStorage.getItem('toggleState') === 'true' ? true : false;
    toggleLastState ? this.isDarkMode = true : this.isDarkMode = false;
    
   }

  ngOnInit() {
  }

  toggleDarkMode(event) {
    // theme toggle event
    const isToggled = event.detail.checked;
    localStorage.setItem('toggleState', isToggled.toString());
    this.themeService.toggleMode();
  }

}
