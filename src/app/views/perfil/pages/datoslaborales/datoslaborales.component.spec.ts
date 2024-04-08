import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoslaboralesComponent } from './datoslaborales.component';

describe('DatoslaboralesComponent', () => {
  let component: DatoslaboralesComponent;
  let fixture: ComponentFixture<DatoslaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatoslaboralesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatoslaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
