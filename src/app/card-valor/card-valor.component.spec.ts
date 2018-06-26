import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardValorComponent } from './card-valor.component';

describe('CardValorComponent', () => {
  let component: CardValorComponent;
  let fixture: ComponentFixture<CardValorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardValorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
