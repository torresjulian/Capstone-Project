import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandiseEditComponent } from './merchandise-edit.component';

describe('MerchandiseEditComponent', () => {
  let component: MerchandiseEditComponent;
  let fixture: ComponentFixture<MerchandiseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandiseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
