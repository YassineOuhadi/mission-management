import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorEspaceComponent } from './professor-espace.component';

describe('ProfessorEspaceComponent', () => {
  let component: ProfessorEspaceComponent;
  let fixture: ComponentFixture<ProfessorEspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorEspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessorEspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
