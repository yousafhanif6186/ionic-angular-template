import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeStepsComponent } from './subscribe-steps.component';

describe('SubscribeStepsComponent', () => {
  let component: SubscribeStepsComponent;
  let fixture: ComponentFixture<SubscribeStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
