import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Warning } from './warning.component';

describe('Warning', () => {
  let component: Warning;
  let fixture: ComponentFixture<Warning>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Warning ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Warning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
