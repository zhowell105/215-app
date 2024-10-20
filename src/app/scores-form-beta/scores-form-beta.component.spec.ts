import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresFormBetaComponent } from './scores-form-beta.component';

describe('ScoresFormBetaComponent', () => {
  let component: ScoresFormBetaComponent;
  let fixture: ComponentFixture<ScoresFormBetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoresFormBetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoresFormBetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
