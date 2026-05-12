import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeClass } from './free-class';

describe('FreeClass', () => {
  let component: FreeClass;
  let fixture: ComponentFixture<FreeClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeClass],
    }).compileComponents();

    fixture = TestBed.createComponent(FreeClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
