import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtUserComponent } from './jwt-user.component';

describe('JwtUserComponent', () => {
  let component: JwtUserComponent;
  let fixture: ComponentFixture<JwtUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
