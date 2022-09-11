import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFactureComponent } from './popup-facture.component';

describe('PopupFactureComponent', () => {
  let component: PopupFactureComponent;
  let fixture: ComponentFixture<PopupFactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
