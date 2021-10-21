import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Tab3Component } from './tab3.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab3RoutingModule } from './tab3-routing.module';

@NgModule({
  declarations: [Tab3Component],
  imports: [CommonModule, FormsModule, IonicModule, Tab3RoutingModule],
})
export class Tab3Module {}
