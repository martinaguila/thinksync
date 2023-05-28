import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-teacher-create-quiz',
  templateUrl: './teacher-create-quiz.page.html',
  styleUrls: ['./teacher-create-quiz.page.scss'],
})
export class TeacherCreateQuizPage implements OnInit {

  @ViewChildren(IonInput) ionInputs!: QueryList<IonInput>;

  quizSetup: any;
  quiz: any;
  quizQuestion;
  choicesValue: any[] = []; // Array to hold the input values
  letterCorrectAnswer;
  quizChoices;
  quizNumber;
  openSetup: boolean = false;
  buttonName: string = "Save";

  constructor(
    private router: Router,
    private toastCtrl: ToastController
  ) {
    // initialize quiz setup
    this.quizSetup = JSON.parse(localStorage.getItem("quizSetup") || '[]');
    console.log(this.quizSetup);

    this.choicesValue = [];
    for (let i = 0; i < this.quizSetup['quizChoices']; i++) {
      this.choicesValue.push({ value: '' });
    }
    console.log(this.choicesValue)
    this.quiz = [];
   }

  ionViewDidEnter(){
    // initialize quiz setup
    this.quizSetup = JSON.parse(localStorage.getItem("quizSetup") || '[]');
    console.log(this.quizSetup);
  }

  ngOnInit() {
  }

  getTotalItems(): number[] {
    return Array(this.quizSetup['quizItems']).fill(0);
  }

  getTotalChoices(): number[] {
    return Array(this.quizSetup['quizChoices']).fill(0);
  }

  public onClickPreview(): void{
    // save quiz to local storage
    // localStorage.setItem("quizSetup", JSON.stringify(this.createDataForm.value));
    // this.presentToast();
    // navigate to create quiz
    // this.router.navigateByUrl("/teacher-create-quiz");
  }

  public onClickCancel(){
    // return to home
    this.router.navigateByUrl("/teacher-setup-quiz");
  }

  // method to display the toast
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000, // Duration in milliseconds (e.g., 2000 = 2 seconds)
      color: 'dark' // Set the color to 'dark' for a black-colored toast
    });

    toast.present();
  }

  public onSelectQuestion(e): void{
    this.buttonName = 'Save'
    // clear all fields
    this.quizQuestion = '';
    for (let choice of this.choicesValue) {
      choice.value = '';
    }
    this.letterCorrectAnswer = '';

    this.quizNumber = e.detail.value;
    this.openSetup = true;
    console.log(this.choicesValue)
    // check if quiz has a value
    if (this.quiz.length > 0){
      // check if number existed
      // if existed, fill the fields
      // change save to edit

      const quizValue = this.quiz.filter(x=>x.number === this.quizNumber);
      console.log(quizValue)
      // assign value to question
      if (quizValue.length > 0){
        this.buttonName = 'Edit';
        this.quizQuestion = quizValue[0].question;
        this.letterCorrectAnswer = quizValue[0].answer;
        this.choicesValue = []
        for(let i = 0; i < quizValue[0].choices['inputValues'].length - 1; i++){
          console.log(quizValue[0].choices[i])
          this.choicesValue.push({ value: quizValue[0].choices['inputValues'][i]});
        }
      }
    }
  }

  public onclickSaveEditQuestion(): void {
    // if fields has no values, apply save values
    // otherwise edit values

    // get values from choices
    const inputValues = this.ionInputs.map(input => input.value);
    console.log('Input values:', inputValues);
    // consolidate quiz structure
    let quizStructure = 
    {
      "number": this.quizNumber,
      "question": this.quizQuestion,
      "choices": {
        inputValues
      },
      "answer": this.letterCorrectAnswer.toLowerCase()
    }

    if (this.buttonName === 'Save'){
      this.quiz.push(quizStructure);
      console.log(this.quiz)
      this.buttonName = 'Edit';
      this.presentToast('Added successful');
    }else{
      console.log('edit')
      // get values from choices
      const inputValues = this.ionInputs.map(input => input.value);
      console.log('Input values:', inputValues, quizStructure);

      // const val = quizValues.choices.inputValues
      this.quiz = this.quiz.map((obj) => {
        if (obj.number === this.quizNumber) {
          // console.log({
          //   ...obj,
          //   question: quizValues[0].question,
          //   answer: quizValues[0].answer,
          //   choices: {
          //     ...obj.choices,
          //     val,
          //   },
          // })
          // Modify the object properties
          return {
            ...obj,
            question: quizStructure.question,
            answer: quizStructure.answer,
            choices: {
              ...obj.choices,
              inputValues,
            },
          };
        }
        return obj; // No modification required, return the original object
      });
      console.log(this.quiz)
      this.presentToast('Modified successful');
    }

    
  }

}
