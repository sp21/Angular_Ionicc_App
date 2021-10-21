import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivityVideoComponent } from '../activity-video/activity-video.component';
import { Activity } from '../interfaces/types';
import { ActivityService } from '../services/activity.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.scss'],
})
export class ActivityDetailComponent implements OnInit {
  activityDetail: Observable<Activity>;
  constructor(
    private _socialSharing: SocialSharing,
    private _modalController: ModalController,
    activityService: ActivityService,
    activateRoute: ActivatedRoute
  ) {
    const activityId = activateRoute.snapshot.params['activityID'];
    setTimeout(() => {
      this.activityDetail = activityService.getActivity(activityId);
    }, 2000);
  }

  ngOnInit(): void {}
  async openModal() {
    const videoModal = await this._modalController.create({
      component: ActivityVideoComponent,
    });
    return await this.activityDetail.subscribe((activity) => {
      videoModal.componentProps = { videoURL: activity.video_url };
      return videoModal.present();
    });
  }

  share() {
    this.activityDetail.subscribe((activity) => {
      this._socialSharing.share(
        'Look What i Found on This App Called Rana',
        activity.name,
        '',
        activity.cropped
      );
    });
  }
}
