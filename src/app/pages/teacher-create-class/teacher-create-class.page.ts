import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClassPage } from '../../modals/class/class.page';

@Component({
  selector: 'app-teacher-create-class',
  templateUrl: './teacher-create-class.page.html',
  styleUrls: ['./teacher-create-class.page.scss'],
})
export class TeacherCreateClassPage implements OnInit {

  public class: Array<any> = [];
  public header = ["No.", "Section", "Pass code", "Action"];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.loadClassLocalStorage();
  }

  private loadClassLocalStorage(): void{
    // load local storages
    this.class = JSON.parse(localStorage.getItem("class") || '[]')
    console.log(this.class.length)
  }

  public onClickAddClass(): void{
    this.classModal()
  }

  async classModal(){
    // open modal
    const modal = await this.modalCtrl.create({
      component: ClassPage,
      cssClass: 'small-modal',
      componentProps: {
        'mode': "Add",
        'detailClassName': '',
        'detailClassPasscode': ''
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // if add, load the local storage to 
        // display the updated class
        this.loadClassLocalStorage();
      }
    });

    return await modal.present();
  }

  async onClickEdit(className, classPasscode){
    console.log(className, classPasscode)
    // open modal
    const modal = await this.modalCtrl.create({
      component: ClassPage,
      cssClass: 'small-modal',
      componentProps: {
        'mode': "Edit",
        'detailClassName': className,
        'detailClassPasscode': classPasscode
      },
      backdropDismiss: false
    });

    modal.onDidDismiss().then((val) => {
      console.log(val.data)
      if (val.data === 'submit'){
        // if add, load the local storage to 
        // display the updated class
        this.loadClassLocalStorage();
      }
    });

    return await modal.present();
  }
}
