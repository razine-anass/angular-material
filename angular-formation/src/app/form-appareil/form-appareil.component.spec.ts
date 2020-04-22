import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppareilComponent } from './form-appareil.component';

describe('FormAppareilComponent', () => {
  let component: FormAppareilComponent;
  let fixture: ComponentFixture<FormAppareilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAppareilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAppareilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
