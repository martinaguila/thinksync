import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  @Input() message;

  currentMode: string = '';

  constructor(
    private themeService: ThemeService,
    private modalCtrl: ModalController
  ) {
    // call service to check what is the current theme
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });
   }

  ngOnInit() {
  }

  async onClickCancel(){
    // close modal
    this.modalCtrl.dismiss("cancel");
  }

  public onClickSubmit(): void{
    // close modal
    this.modalCtrl.dismiss("submit");
  }

}
