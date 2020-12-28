import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapsmartComponent } from './kapsmart.component';

describe('KapsmartComponent', () => {
  let component: KapsmartComponent;
  let fixture: ComponentFixture<KapsmartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapsmartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KapsmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
