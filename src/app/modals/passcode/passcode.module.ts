import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasscodePageRoutingModule } from './passcode-routing.module';

import { PasscodePage } from './passcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasscodePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PasscodePage]
})
export class PasscodePageModule {}
