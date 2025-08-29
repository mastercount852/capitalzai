import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Painel08Component } from './painel08.component';

describe('Painel08Component', () => {
  let component: Painel08Component;
  let fixture: ComponentFixture<Painel08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Painel08Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Painel08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
