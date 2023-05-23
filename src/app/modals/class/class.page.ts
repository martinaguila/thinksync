import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-class',
  templateUrl: './class.page.html',
  styleUrls: ['./class.page.scss'],
})
export class ClassPage implements OnInit {

  @Input() mode;
  @Input() detailClassName;
  @Input() detailClassPasscode;

  currentMode: string = '';
  classDataForm: FormGroup;
  class: any;
  error: boolean = false;

  constructor(
    private themeService: ThemeService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {
    // call service to check what is the current theme
    this.themeService.getCurrentMode().subscribe(mode => {
      this.currentMode = mode;
    });
    // initialize form group
    // empty form for add
    this.classDataForm = new FormGroup({
      className: new FormControl("", Validators.required),
      classPasscode: new FormControl("", Validators.required),
    });
    

    this.class = JSON.parse(localStorage.getItem("class") || '[]');
   }

  ngOnInit() {
    // fill up details for edit
    if (this.mode === 'Edit'){
      this.classDataForm = new FormGroup({
        className: new FormControl(this.detailClassName, Validators.required),
        classPasscode: new FormControl(this.detailClassPasscode, Validators.required),
      });
    }
  }

  async onClickCancel(){
    // close modal
    this.modalCtrl.dismiss("cancel");
  }

  public onClickSubmit(): void{
    // if mode is edit
    // get the details then modify
    if (this.mode === 'Edit'){
      // check is class name exists
      // remove existing detail
      // if exists prompt an error
      const filteredArray = this.class.filter(obj => obj["className"] !== this.detailClassName);
      console.log(filteredArray)
      const hasSimilarName = filteredArray.some(obj => obj["className"].toLowerCase() === this.classDataForm.value['className'].toLowerCase());
  
      if (hasSimilarName){
        this.error = true;

        return;
      }

      // edit class
      let editClass = this.class.find(obj => obj["className"] === this.detailClassName);
      editClass.className = this.classDataForm.value['className'];
      editClass.classPasscode = this.classDataForm.value['classPasscode'];
    }else{
      // if mode is add
      // add the fields
      if (this.class.length === 0){
        // add class if length is 0
        this.class.push({
          className: this.classDataForm.value['className'],
          classPasscode: this.classDataForm.value['classPasscode']
        })
      }else{
        // check is class name exists
        // if exists prompt an error
        const hasSimilarName = this.class.some(obj => obj["className"].toLowerCase() === this.classDataForm.value['className'].toLowerCase());
  
        if (hasSimilarName){
          this.error = true;
          return;
        }
  
        this.class.push({
          className: this.classDataForm.value['className'],
          classPasscode: this.classDataForm.value['classPasscode']
        })
      }
    }
    
    console.log(this.class)
    localStorage.setItem("class", JSON.stringify(this.class));
    this.presentToast();
    this.modalCtrl.dismiss("submit");
  }

  private checkSimilarClassName(): void{
    
  }

  // method to display the toast
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Class saved!',
      duration: 2000, // Duration in milliseconds (e.g., 2000 = 2 seconds)
      color: 'dark' // Set the color to 'dark' for a black-colored toast
    });

    toast.present();
  }

}
