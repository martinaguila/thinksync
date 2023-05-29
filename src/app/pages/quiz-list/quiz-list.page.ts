import { Component, OnInit } from '@angular/core';
import { PasscodePage } from '../../modals/passcode/passcode.page';
import { ModalController } from '@ionic/angular';
import { ConfirmationPage } from '../../modals/confirmation/confirmation.page';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.page.html',
  styleUrls: ['./quiz-list.page.scss'],
})
export class QuizListPage implements OnInit {

  quizLists;
  classLists;
  quizListsDisplay;
  openLists: boolean = false;
  quizRecords;
  openNoRecord: boolean = false;
  isSelected: boolean = false;
  selectedClass: string = '';
  selectedIndex;

  // todo
  // init errors
  // dd bg color
  // dd modal bg color

  constructor(
    private modalCtrl: ModalController
  ) {

    // this.quizLists = 
    // [
    //   {
    //       "subject": "English",
    //       "class": "Jacinto",
    //       "questions": [
    //           {
    //               "number": 1,
    //               "question": "oiuoiuuoiuiou",
    //               "choices": {
    //                   "inputValues": [
    //                       "a",
    //                       "s",
    //                       "a"
    //                   ]
    //               },
    //               "answer": "a"
    //           },
    //           {
    //               "number": 2,
    //               "question": "toytiygiyoyiuoy",
    //               "choices": {
    //                   "inputValues": [
    //                       "r",
    //                       "t",
    //                       "b"
    //                   ]
    //               },
    //               "answer": "b"
    //           },
    //           {
    //               "number": 3,
    //               "question": "uityiuyy edit",
    //               "choices": {
    //                   "inputValues": [
    //                       "t",
    //                       "y",
    //                       "c"
    //                   ]
    //               },
    //               "answer": "c"
    //           }
    //       ],
    //       "items": 3
    //   },
    //   {
    //       "subject": "Math",
    //       "class": "Mabini",
    //       "questions": [
    //           {
    //               "number": 1,
    //               "question": "uyyoiuyoiuy",
    //               "choices": {
    //                   "inputValues": [
    //                       "t",
    //                       "y",
    //                       "a"
    //                   ]
    //               },
    //               "answer": "a"
    //           },
    //           {
    //               "number": 2,
    //               "question": "bmbmnbnmbmnb",
    //               "choices": {
    //                   "inputValues": [
    //                       "i",
    //                       "o",
    //                       "b"
    //                   ]
    //               },
    //               "answer": "b"
    //           },
    //           {
    //               "number": 3,
    //               "question": "dsfsfdsdffgd",
    //               "choices": {
    //                   "inputValues": [
    //                       "w",
    //                       "e",
    //                       "c"
    //                   ]
    //               },
    //               "answer": "c"
    //           }
    //       ],
    //       "items": 3
    //   },
    //   {
    //     "subject": "English",
    //     "class": "Jacinto",
    //     "questions": [
    //         {
    //             "number": 1,
    //             "question": "oiuoiuuoiuiou",
    //             "choices": {
    //                 "inputValues": [
    //                     "a",
    //                     "s",
    //                     "a"
    //                 ]
    //             },
    //             "answer": "a"
    //         },
    //         {
    //             "number": 2,
    //             "question": "toytiygiyoyiuoy",
    //             "choices": {
    //                 "inputValues": [
    //                     "r",
    //                     "t",
    //                     "b"
    //                 ]
    //             },
    //             "answer": "b"
    //         },
    //         {
    //             "number": 3,
    //             "question": "uityiuyy edit",
    //             "choices": {
    //                 "inputValues": [
    //                     "t",
    //                     "y",
    //                     "c"
    //                 ]
    //             },
    //             "answer": "c"
    //         }
    //     ],
    //     "items": 3
    // },
    // ]

    console.log(this.quizLists)
   }

  ionViewWillEnter(){
    this.selectedClass = '';
    this.openLists = false;
    this.isSelected = false;

    // initialize quiz setup
    this.quizLists = JSON.parse(localStorage.getItem("quizes") || '[]');

    // initialize classes
    this.classLists = JSON.parse(localStorage.getItem("class") || '[]');

  }

  ngOnInit() {
    // initialize records
    this.quizRecords = JSON.parse(localStorage.getItem("quizRecord") || '[]');
    window.addEventListener('storage', this.handleStorageChange.bind(this));
  }

  public onChangeSelectClass(e): void{
    // get quiz which belongs to the class selected
    // display message if no record found
    this.isSelected = true;
    this.openNoRecord = false;

    this.selectedClass = e.detail.value;
    this.quizListsDisplay = this.quizLists.filter(x=> x.class == e.detail.value);
    this.quizListsDisplay.length > 0 ? this.openLists = true : this.openLists = false;
    console.log(this.quizListsDisplay);
  }

  public openQuizRecord(i: number): void{
    // open quiz records
    // display message if quiz is not yet taken
    this.selectedIndex = i;
    if (this.quizRecords.length === 0){
      this.openNoRecord = !this.openNoRecord;
    }
  }

  public onClickDeleteQuiz(i: number): void{
    this.passcodeModal(i);
  }

  async passcodeModal(i: number){
    // open modal
    const modal = await this.modalCtrl.create({
      component: PasscodePage,
      cssClass: 'small-modal',
      componentProps: {
        'urlToNavigate': ""
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // navigate to create class
        this.confirmationModal(i)
      }
    });

    return await modal.present();
  }

  async confirmationModal(i: number){
    // open modal
    const modal = await this.modalCtrl.create({
      component: ConfirmationPage,
      cssClass: 'small-modal',
      componentProps: {
        'message': "Are you sure you want to delete this quiz?"
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // delete quiz
        this.deleteQuiz(i);

        // insert toast here
      }
    });

    return await modal.present();
  }

  private deleteQuiz(i: number){
    // delete quiz
    console.log(i)
    this.quizLists.splice(i, 1);

    // check if quiz has still record
    this.quizListsDisplay = this.quizLists.filter(x=> x.class == this.selectedClass);
    this.quizListsDisplay.length > 0 ? this.openLists = true : this.openLists = false;
  }

  handleStorageChange(event: StorageEvent) {
    if (event.key === 'quizes') {
      // Retrieve the updated quizSetup from local storage
      const quizes = JSON.parse(localStorage.getItem('quizes') || '[]');
      console.log('Updated quizes:', quizes);
      // Perform any necessary actions with the updated data
    }

    else if (event.key === 'class') {
      // Retrieve the updated quizSetup from local storage
      const classLists = JSON.parse(localStorage.getItem('class') || '[]');
      console.log('Updated class:', classLists);
      // Perform any necessary actions with the updated data
    }
  }

}
