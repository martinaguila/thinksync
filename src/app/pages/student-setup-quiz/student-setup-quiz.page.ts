import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasscodePage } from '../../modals/passcode/passcode.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-student-setup-quiz',
  templateUrl: './student-setup-quiz.page.html',
  styleUrls: ['./student-setup-quiz.page.scss'],
})
export class StudentSetupQuizPage implements OnInit {

  quizLists;
  classLists;
  selectedClass: string = '';
  quizSetupDataForm: FormGroup;
  openQuiz: boolean = false;
  quizListsDisplay;
  passCode;

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {
    // initialize form group
    this.quizSetupDataForm = new FormGroup({
      studentName: new FormControl("", Validators.required),
      studentClass: new FormControl("", Validators.required),
      quiz: new FormControl("", Validators.required)
    });
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // initialize quiz setup
    this.quizLists = JSON.parse(localStorage.getItem("quizes") || '[]');
    
    // initialize classes
    this.classLists = JSON.parse(localStorage.getItem("class") || '[]');
    console.log(this.classLists, this.quizLists)
  }

  public onClickCancel(): void{
    // return to home
    this.router.navigateByUrl("/teacher-setup-quiz");
  }

  public onClickSubmit(): void{
    this.passcodeModal();
  }

  public onChangeSelectClass(e): void{
    this.openQuiz = true;

    // display quiz
    this.selectedClass = e.detail.value;

    // get pass code
    const getPassCode = this.classLists.filter(x=> x.className == e.detail.value);
    this.passCode = getPassCode[0].classPasscode;
    console.log(getPassCode, getPassCode[0].classPasscode)
  }

  async passcodeModal(){
    // open modal
    const modal = await this.modalCtrl.create({
      component: PasscodePage,
      cssClass: 'small-modal',
      componentProps: {
        'urlToNavigate': "",
        'passCodeMode': 'student',
        'passCode': this.passCode
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // navigate to take quiz

        localStorage.setItem("takeQuiz",JSON.stringify(this.quizSetupDataForm.value));
        this.router.navigateByUrl('/student-answer-quiz');
      }
    });

    return await modal.present();
  }
}
