import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  ngOnInit(){
    console.log("Hello")


  }

  testClick(){
    // clicked the button to display the logs
    console.log("clicked!")
  }



}