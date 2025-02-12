import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangControllerComponent } from './lang-controller.component';

describe('LangControllerComponent', () => {
  let component: LangControllerComponent;
  let fixture: ComponentFixture<LangControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangControllerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
