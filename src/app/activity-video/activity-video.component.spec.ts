import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityVideoComponent } from './activity-video.component';

describe('ActivityVideoComponent', () => {
  let component: ActivityVideoComponent;
  let fixture: ComponentFixture<ActivityVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
