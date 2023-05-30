import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { ModalController, NavParams } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.page.html',
  styleUrls: ['./passcode.page.scss'],
})
export class PasscodePage implements OnInit {

  passCodeMode;
  currentMode: string = '';
  passcodeDataForm: FormGroup;
  error: boolean = false;
  classLists;
  passCode;
  label;

  constructor(
    private themeService: ThemeService,
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {
    // call service to check what is the current theme
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });

    // initialize form group
    this.passcodeDataForm = new FormGroup({
      passcode: new FormControl("", Validators.required),
    });

    // initialize pass code 
    this.passCodeMode = navParams.get('passCodeMode');
    this.passCode = navParams.get('passCode');

    // initialize label
    this.label = this.passCodeMode === 'teacher' ? 'Teacher' : 'Class';
    console.log(this.passCodeMode, this.passCode)
   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // initialize classes
    this.classLists = JSON.parse(localStorage.getItem("class") || '[]');
  }

  public onClickSubmit(): void{
    // pass code for teacher is 1234
    // pass code for student is saved on class lists
    // display error if incorrect pass code
    if (this.passcodeDataForm.value['passcode'] === 1234 && this.passCodeMode === 'teacher' ||
    this.passcodeDataForm.value['passcode'] === this.passCode && this.passCodeMode === 'student'){
      this.modalCtrl.dismiss("submit");
    }else{
      this.error = true
    }
  }

  async onClickCancel(){
    // close modal
    this.modalCtrl.dismiss("cancel");
  }

}
