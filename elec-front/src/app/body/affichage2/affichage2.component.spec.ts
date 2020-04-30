import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Affichage2Component } from './affichage2.component';

describe('Affichage2Component', () => {
  let component: Affichage2Component;
  let fixture: ComponentFixture<Affichage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Affichage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Affichage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
