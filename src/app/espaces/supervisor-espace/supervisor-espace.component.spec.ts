import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorEspaceComponent } from './supervisor-espace.component';

describe('SupervisorEspaceComponent', () => {
  let component: SupervisorEspaceComponent;
  let fixture: ComponentFixture<SupervisorEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorEspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
