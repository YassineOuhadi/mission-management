import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTreatmentComponent } from './mission.component';

describe('MissionTreatmentComponent', () => {
  let component: MissionTreatmentComponent;
  let fixture: ComponentFixture<MissionTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionTreatmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
