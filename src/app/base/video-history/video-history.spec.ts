import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoHistory } from './video-history';

describe('VideoHistory', () => {
  let component: VideoHistory;
  let fixture: ComponentFixture<VideoHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(VideoHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
