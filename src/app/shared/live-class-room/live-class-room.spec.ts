import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveClassRoom } from './live-class-room';

describe('LiveClassRoom', () => {
  let component: LiveClassRoom;
  let fixture: ComponentFixture<LiveClassRoom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveClassRoom],
    }).compileComponents();

    fixture = TestBed.createComponent(LiveClassRoom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
