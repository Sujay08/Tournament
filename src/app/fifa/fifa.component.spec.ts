import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FIFAComponent } from './fifa.component';

describe('FIFAComponent', () => {
  let component: FIFAComponent;
  let fixture: ComponentFixture<FIFAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FIFAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FIFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
