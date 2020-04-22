import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromReactUserComponent } from './from-react-user.component';

describe('FromReactUserComponent', () => {
  let component: FromReactUserComponent;
  let fixture: ComponentFixture<FromReactUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromReactUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromReactUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
