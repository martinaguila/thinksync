import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PasscodePage } from '../../modals/passcode/passcode.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController,
    private router: Router
  ) {
    // localStorage.removeItem("quizes")
  }


  ngOnInit(){
    console.log("Hello")
  }

  testClick(){
    // clicked the button to display the logs
    console.log("clicked!")
  }

  public onClickCreateQuiz(): void{
    this.createQuizModal();
  }

  async createQuizModal(){
    // open modal
    const modal = await this.modalCtrl.create({
      component: PasscodePage,
      cssClass: 'small-modal',
      componentProps: {
        'urlToNavigate': "/teacher-create-quiz",
        'passCodeMode': 'teacher'
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // navigate to create quiz
        this.router.navigateByUrl('/teacher-setup-quiz')
      }
    });

    return await modal.present();
  }

  public onClickTakeQuiz(): void{
    this.router.navigateByUrl('/student-setup-quiz');
  }

}
