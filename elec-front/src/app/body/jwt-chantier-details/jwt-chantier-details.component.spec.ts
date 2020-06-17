import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtChantierDetailsComponent } from './jwt-chantier-details.component';

describe('JwtChantierDetailsComponent', () => {
  let component: JwtChantierDetailsComponent;
  let fixture: ComponentFixture<JwtChantierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtChantierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtChantierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
