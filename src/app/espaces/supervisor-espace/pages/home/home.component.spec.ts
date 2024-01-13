import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorHomeComponent } from './home.component';

describe('SupervisorHomeComponent', () => {
  let component: SupervisorHomeComponent;
  let fixture: ComponentFixture<SupervisorHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
