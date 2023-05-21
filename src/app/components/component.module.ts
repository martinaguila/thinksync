import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BackSubmitButtonComponent } from '../components/back-submit-button/back-submit-button.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    BackSubmitButtonComponent,
    HeaderComponent
  ],
  exports: [
    BackSubmitButtonComponent,
    HeaderComponent
  ]
})
export class ComponentsModule {}
