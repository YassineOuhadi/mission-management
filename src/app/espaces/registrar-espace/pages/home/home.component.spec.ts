import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHomeComponent } from './home.component';

describe('RegistrarHomeComponent', () => {
  let component: RegistrarHomeComponent;
  let fixture: ComponentFixture<RegistrarHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
