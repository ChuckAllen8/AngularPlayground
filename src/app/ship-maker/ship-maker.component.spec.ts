import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipMakerComponent } from './ship-maker.component';

describe('ShipMakerComponent', () => {
  let component: ShipMakerComponent;
  let fixture: ComponentFixture<ShipMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
