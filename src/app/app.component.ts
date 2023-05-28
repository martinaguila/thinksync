import { Component } from '@angular/core';
import { ThemeService } from './services/theme/theme.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { PasscodePage } from './modals/passcode/passcode.page';

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
      title: 'Manage Class',
      url: '/teacher-create-class',
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
  private routerSubscription: Subscription;
  currentPage: string = '';

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private modalCtrl: ModalController
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

    // initialize router subscription
    this.routerSubscription = this.router.events.subscribe((event) => {
      // 
    });

    this.getCurrentPage();
  }

  public onClickRedirection(url: string): void{
    // navigate to page
    // if navigating to create class and not on class page,
    // display passcode modal
    if (url === '/teacher-create-class'){
      if (this.currentPage !== '/teacher-create-class'){
        this.passcodeModal()
      }else{
        // 
      }
    }else{
      this.router.navigateByUrl(url)
    }
  }

  async passcodeModal(){
    // open modal
    const modal = await this.modalCtrl.create({
      component: PasscodePage,
      cssClass: 'small-modal',
      componentProps: {
        'urlToNavigate': "/teacher-create-class"
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // navigate to create class
        this.router.navigateByUrl('/teacher-create-class')
      }
    });

    return await modal.present();
  }

  private getCurrentPage(): void{
    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log('page url', event.url);
        
        this.currentPage = event.url;
      }
    });
  }
  
}
