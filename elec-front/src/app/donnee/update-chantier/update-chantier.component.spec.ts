import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChantierComponent } from './update-chantier.component';

describe('UpdateChantierComponent', () => {
  let component: UpdateChantierComponent;
  let fixture: ComponentFixture<UpdateChantierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateChantierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
