import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-quiz-preview',
  templateUrl: './quiz-preview.page.html',
  styleUrls: ['./quiz-preview.page.scss'],
})
export class QuizPreviewPage implements OnInit {

  quiz;

  currentMode: string = '';

  quizArray;

  constructor(
    public themeService: ThemeService,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {
    // call service to check what is the current theme
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });

    // initialize quiz preview content
    this.quiz = navParams.get('quiz'); // Assign the received value to quiz property

    console.log(this.quiz)

    // this.quizArray = [
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    //   {
    //     number: 1,
    //     question: 'test',
    //     choices: {
    //       inputValues: ['1', '2', '3', 'a'],
    //     },
    //     answer: 'a',
    //   },
    // ];
   }

  ngOnInit() {
  }

  public getChoiceLabel(index: number): string {
    return String.fromCharCode(97 + index);
  }

  public onClickSave(): void{
    this.modalCtrl.dismiss("submit");
  }

  async onClickCancel(){
    // close modal
    this.modalCtrl.dismiss("cancel");
  }

}
