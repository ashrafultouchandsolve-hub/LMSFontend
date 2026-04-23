import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../../Service/auth.service';
import { LearningApiService } from '../../Service/learning-api.service';

import { CourseDetails } from './course-details';

describe('CourseDetails', () => {
  let component: CourseDetails;
  let fixture: ComponentFixture<CourseDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetails],
      providers: [
        provideRouter([]),
        {
          provide: LearningApiService,
          useValue: {
            getAllCourses: () => of({ data: [], message: '' }),
            buildDownloadUrl: () => '',
          },
        },
        {
          provide: AuthService,
          useValue: {
            isLoggedIn: () => false,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
