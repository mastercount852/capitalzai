import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Painel010Component } from './painel010.component';

describe('Painel010Component', () => {
  let component: Painel010Component;
  let fixture: ComponentFixture<Painel010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Painel010Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Painel010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
