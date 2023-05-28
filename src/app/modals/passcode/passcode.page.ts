import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.page.html',
  styleUrls: ['./passcode.page.scss'],
})
export class PasscodePage implements OnInit {

  currentMode: string = '';
  passcodeDataForm: FormGroup;
  error: boolean = false;

  constructor(
    private themeService: ThemeService,
    private modalCtrl: ModalController
  ) {
    // call service to check what is the current theme
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });

    // initialize form group
    this.passcodeDataForm = new FormGroup({
      passcode: new FormControl("", Validators.required),
    });
   }

  ngOnInit() {
  }

  public onClickSubmit(): void{
    // pass code is 1234
    // display error if incorrect pass code
    if (this.passcodeDataForm.value['passcode'] === 1234){
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
