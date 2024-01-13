import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorEspaceTopNavComponent } from './top-nav.component';

describe('SupervisorEspaceTopNavComponent', () => {
  let component: SupervisorEspaceTopNavComponent;
  let fixture: ComponentFixture<SupervisorEspaceTopNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorEspaceTopNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorEspaceTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
