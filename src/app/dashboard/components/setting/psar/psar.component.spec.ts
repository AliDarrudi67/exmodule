import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsarComponent } from './psar.component';

describe('PsarComponent', () => {
  let component: PsarComponent;
  let fixture: ComponentFixture<PsarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsarComponent]
    });
    fixture = TestBed.createComponent(PsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
