import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChantierComponent } from './create-chantier.component';

describe('CreateChantierComponent', () => {
  let component: CreateChantierComponent;
  let fixture: ComponentFixture<CreateChantierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateChantierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChantierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
