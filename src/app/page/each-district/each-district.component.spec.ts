import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachDistrictComponent } from './each-district.component';

describe('EachDistrictComponent', () => {
  let component: EachDistrictComponent;
  let fixture: ComponentFixture<EachDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachDistrictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
