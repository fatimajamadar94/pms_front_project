import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrverificationComponent } from './hrverification.component';

describe('HrverificationComponent', () => {
  let component: HrverificationComponent;
  let fixture: ComponentFixture<HrverificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrverificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HrverificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
