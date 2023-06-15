import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-teacher-setup-quiz',
  templateUrl: './teacher-setup-quiz.page.html',
  styleUrls: ['./teacher-setup-quiz.page.scss'],
})
export class TeacherSetupQuizPage implements OnInit {

  createDataForm: FormGroup;
  class: any;
  error: boolean = false;
  selectedClass: string = '';
  choicesSelection: Array<any> = [2,3,4]

  constructor(
    private router: Router,
    private toastCtrl: ToastController
  ) {
    // initialize form group
    this.createDataForm = new FormGroup({
      quizTitle: new FormControl("", Validators.required),
      quizItems: new FormControl("", Validators.required),
      quizChoices: new FormControl("", Validators.required),
      class: new FormControl("", Validators.required),
    });

    // initialize classes
    this.class = JSON.parse(localStorage.getItem("class") || '[]');

    // clear quiz setup local storage
    localStorage.removeItem("quizSetup");
   }

  ngOnInit() {
    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  public onClickSubmit(): void{
    // save quiz to local storage
    localStorage.setItem("quizSetup", JSON.stringify(this.createDataForm.value));
    this.presentToast();
    // navigate to create quiz
    this.router.navigateByUrl("/teacher-create-quiz");
  }

  public onClickCancel(){
    // return to home
    this.router.navigateByUrl("/home");
  }

  // method to display the toast
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Quiz setup finished!',
      duration: 2000, // Duration in milliseconds (e.g., 2000 = 2 seconds)
      color: 'dark' // Set the color to 'dark' for a black-colored toast
    });

    toast.present();
  }

  handleStorageChange(event: StorageEvent) {
    if (event.key === 'quizSetup') {
      // Retrieve the updated quizSetup from local storage
      const quizSetup = JSON.parse(localStorage.getItem('quizSetup') || '[]');
      console.log('Updated quizSetup:', quizSetup);
      // Perform any necessary actions with the updated data
    }
  }

}
