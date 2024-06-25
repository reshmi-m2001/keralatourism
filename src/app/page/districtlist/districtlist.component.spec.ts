import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictlistComponent } from './districtlist.component';

describe('DistrictlistComponent', () => {
  let component: DistrictlistComponent;
  let fixture: ComponentFixture<DistrictlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
