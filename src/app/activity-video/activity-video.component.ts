import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-activity-video',
  templateUrl: './activity-video.component.html',
  styleUrls: ['./activity-video.component.scss'],
})
export class ActivityVideoComponent implements OnInit {
  videoURL: string;
  constructor(navParams: NavParams, private _modalController: ModalController) {
    this.videoURL = navParams.get('videoURL');
  }

  ngOnInit(): void {}
  closeModal() {
    this._modalController.dismiss();
  }
}
