import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Affichage1Component } from './affichage1.component';

describe('Affichage1Component', () => {
  let component: Affichage1Component;
  let fixture: ComponentFixture<Affichage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Affichage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Affichage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
