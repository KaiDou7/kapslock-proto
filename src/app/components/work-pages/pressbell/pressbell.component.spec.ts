import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressbellComponent } from './pressbell.component';

describe('PressbellComponent', () => {
  let component: PressbellComponent;
  let fixture: ComponentFixture<PressbellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressbellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressbellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
