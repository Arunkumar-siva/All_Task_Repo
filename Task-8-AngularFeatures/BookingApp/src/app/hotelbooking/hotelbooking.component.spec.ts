import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelbookingComponent } from './hotelbooking.component';

describe('HotelbookingComponent', () => {
  let component: HotelbookingComponent;
  let fixture: ComponentFixture<HotelbookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelbookingComponent]
    });
    fixture = TestBed.createComponent(HotelbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
