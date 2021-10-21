import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../interfaces/types';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activityList: Observable<Activity[]>;
  constructor(private _activityService: ActivityService) {
    setTimeout(() => {
      this.activityList = _activityService.getAllActivities();
    }, 1000);
  }

  ngOnInit(): void {}
}
