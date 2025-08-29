import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Painel09Component } from './painel09.component';

describe('Painel09Component', () => {
  let component: Painel09Component;
  let fixture: ComponentFixture<Painel09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Painel09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Painel09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
