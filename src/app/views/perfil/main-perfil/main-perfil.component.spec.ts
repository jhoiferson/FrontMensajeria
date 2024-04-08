import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPerfilComponent } from './main-perfil.component';

describe('MainPerfilComponent', () => {
  let component: MainPerfilComponent;
  let fixture: ComponentFixture<MainPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPerfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
