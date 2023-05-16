import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequirementsofyouComponent } from './requirementsofyou.component';

describe('RequirementsofyouComponent', () => {
  let component: RequirementsofyouComponent;
  let fixture: ComponentFixture<RequirementsofyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequirementsofyouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequirementsofyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
