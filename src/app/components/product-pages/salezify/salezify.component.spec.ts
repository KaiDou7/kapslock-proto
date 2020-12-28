import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalezifyComponent } from './salezify.component';

describe('SalezifyComponent', () => {
  let component: SalezifyComponent;
  let fixture: ComponentFixture<SalezifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalezifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalezifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
