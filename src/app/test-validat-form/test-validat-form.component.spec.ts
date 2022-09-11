import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestValidatFormComponent } from './test-validat-form.component';

describe('TestValidatFormComponent', () => {
  let component: TestValidatFormComponent;
  let fixture: ComponentFixture<TestValidatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestValidatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestValidatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
