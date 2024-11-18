import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssPositioningComponent } from './css-positioning.component';

describe('CssPositioningComponent', () => {
  let component: CssPositioningComponent;
  let fixture: ComponentFixture<CssPositioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssPositioningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssPositioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
