import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityDetailRoutingModule } from './activity-detail-routing.module';
import { ActivityDetailComponent } from './activity-detail.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ActivityVideoModule } from '../activity-video/activity-video.module';

@NgModule({
  declarations: [ActivityDetailComponent],
  imports: [
    ActivityVideoModule,
    CommonModule,
    ActivityDetailRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
  ],
})
export class ActivityDetailModule {}
