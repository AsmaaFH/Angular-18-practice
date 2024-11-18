import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormValidatorsComponent } from './model-driven-form-validators.component';

describe('ModelDrivenFormValidatorsComponent', () => {
  let component: ModelDrivenFormValidatorsComponent;
  let fixture: ComponentFixture<ModelDrivenFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDrivenFormValidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDrivenFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
