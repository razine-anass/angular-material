import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtChantierComponent } from './jwt-chantier.component';

describe('JwtChantierComponent', () => {
  let component: JwtChantierComponent;
  let fixture: ComponentFixture<JwtChantierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtChantierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
