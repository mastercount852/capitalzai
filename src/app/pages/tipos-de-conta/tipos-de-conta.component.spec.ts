import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDeContaComponent } from './tipos-de-conta.component';

describe('TiposDeContaComponent', () => {
  let component: TiposDeContaComponent;
  let fixture: ComponentFixture<TiposDeContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposDeContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposDeContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
