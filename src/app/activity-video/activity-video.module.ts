import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityVideoRoutingModule } from './activity-video-routing.module';
import { ActivityVideoComponent } from './activity-video.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ActivityVideoComponent],
  imports: [CommonModule, ActivityVideoRoutingModule, IonicModule],
  entryComponents: [ActivityVideoComponent],
})
export class ActivityVideoModule {}
