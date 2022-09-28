import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePersonPageRoutingModule } from './create-person-routing.module';

import { CreatePersonPage } from './create-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePersonPageRoutingModule
  ],
  declarations: [CreatePersonPage]
})
export class CreatePersonPageModule {}
