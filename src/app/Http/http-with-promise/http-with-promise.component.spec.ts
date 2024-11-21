import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpWithPromiseComponent } from './http-with-promise.component';

describe('HttpWithPromiseComponent', () => {
  let component: HttpWithPromiseComponent;
  let fixture: ComponentFixture<HttpWithPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpWithPromiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpWithPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
