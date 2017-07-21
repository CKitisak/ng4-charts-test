import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbgSliderComponent } from './rbg-slider.component';

describe('RbgSliderComponent', () => {
  let component: RbgSliderComponent;
  let fixture: ComponentFixture<RbgSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbgSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
