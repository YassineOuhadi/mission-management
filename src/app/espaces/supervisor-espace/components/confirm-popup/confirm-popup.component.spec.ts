import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorConfirmPopupComponent } from './confirm-popup.component';

describe('SupervisorConfirmPopupComponent', () => {
  let component: SupervisorConfirmPopupComponent;
  let fixture: ComponentFixture<SupervisorConfirmPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorConfirmPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorConfirmPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
