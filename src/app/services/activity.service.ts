import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../interfaces/types';
@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor(private _httpClient: HttpClient) {}
  getActivity(activityID: string): Observable<Activity> {
    return this._httpClient.get<Activity>(API + '/id/' + activityID);
  }
  getAllActivities(): Observable<Activity[]> {
    return this._httpClient.get<Activity[]>(API);
  }
}

const API = 'https://orangevalleycaa.org/api/videos';
