import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTachComponent } from './first-tach.component';

describe('FirstTachComponent', () => {
  let component: FirstTachComponent;
  let fixture: ComponentFixture<FirstTachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstTachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
