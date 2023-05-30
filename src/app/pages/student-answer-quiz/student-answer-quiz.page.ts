import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ScorePage } from '../../modals/score/score.page';
import { ModalController } from '@ionic/angular';
import { ConfirmationPage } from '../../modals/confirmation/confirmation.page';

@Component({
  selector: 'app-student-answer-quiz',
  templateUrl: './student-answer-quiz.page.html',
  styleUrls: ['./student-answer-quiz.page.scss'],
})
export class StudentAnswerQuizPage implements OnInit {

  takeQuiz;
  quiz;
  answerDataForm: FormGroup;
  quizRecords;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController
  ) {
    // initialize form group
    // this.answerDataForm = new FormGroup({
    //   answer: new FormControl("", Validators.required)
    // });

    this.answerDataForm = this.formBuilder.group({}); // Initialize an empty form group

    // // Dynamically add form controls based on quiz questions
    // this.quiz.forEach((item, index) => {
    //   this.answerDataForm.addControl(`answer_${index}`, this.formBuilder.control(''));
    // });
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // initialize records
    this.quizRecords = JSON.parse(localStorage.getItem("quizRecord") || '[]');

    // initialize take quiz setup
    this.takeQuiz = JSON.parse(localStorage.getItem("takeQuiz") || '[]');
    console.log(this.takeQuiz)

    // initialize quiz display
    this.quiz = [];
    this.getQuiz();
  }

  private getQuiz(): void{
    const quizList = JSON.parse(localStorage.getItem("quizes") || '[]');
    const getQuiz = quizList[this.takeQuiz['quiz']];
    this.quiz = getQuiz['questions'];
    // Dynamically add form controls based on quiz questions
    this.quiz.forEach((item, index) => {
      this.answerDataForm.addControl(`answer_${index}`, this.formBuilder.control(''));
    });
    
    console.log(this.quiz);
  }

  public getChoiceLabel(index: number): string {
    return String.fromCharCode(97 + index);
  }

  public onClickCancel(): void{
    // return to home
    this.router.navigateByUrl("/student-setup-quiz");
  }

  public onClickSubmit(): void{
    // this.passcodeModal();
    console.log(this.answerDataForm.value)

    const answerValues = this.answerDataForm.value;
    let totalCorrectAnswers = 0;

    // Iterate through each question and compare the answer with the user's choice
    this.quiz.forEach((question, index) => {
      const userAnswer = answerValues[`answer_${index}`];

      if (userAnswer === question.answer) {
        totalCorrectAnswers++;
      }
    });

    console.log('Total Correct Answers:', totalCorrectAnswers);

    // consolidate data for quiz record
    const quizRecord = {
      "studentName": this.takeQuiz['studentName'],
      "quizIndex": this.takeQuiz['quiz'],
      "totalScoreDisplay": `${totalCorrectAnswers + "/" + this.quiz.length}`,
      "totalScore": totalCorrectAnswers,
      "totalItems": this.quiz.length
    }

    this.quizRecords.push(quizRecord);
    this.confirmationModal(quizRecord);
    // console.log(quizRecord)
  }

  async confirmationModal(quizRecord){
    // open modal
    const modal = await this.modalCtrl.create({
      component: ConfirmationPage,
      cssClass: 'small-modal',
      componentProps: {
        'message': "Are you sure you want to submit your answers?"
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // open quiz score modal
        this.scoreModal(quizRecord);
      }
    });

    return await modal.present();
  }

  async scoreModal(quizRecord){
    // open modal
    const modal = await this.modalCtrl.create({
      component: ScorePage,
      cssClass: 'small-modal',
      componentProps: {
        'quizRecord': quizRecord
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'close'){
        // store quiz to loca storage
        localStorage.setItem("quizRecord", JSON.stringify(this.quizRecords));
        // delete quiz
        this.router.navigateByUrl('/quiz-list')
      }
    });

    return await modal.present();
  }
}
