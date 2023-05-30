import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  currentMode: string = '';
  quizRecord;

  constructor(
    private modalCtrl: ModalController,
    private themeService: ThemeService,
    private navParams: NavParams
  ) {
      // initialize quiz preview content
      this.quizRecord = navParams.get('quizRecord');
      // console.log(this.quizRecord)

      // call service to check what is the current theme
      this.themeService.getCurrentMode().subscribe(mode => {
        this.currentMode = mode;
      });
    }

  ngOnInit() {
  }

  async onClickClose(){
    // close modal
    this.modalCtrl.dismiss('close');
  }

}
