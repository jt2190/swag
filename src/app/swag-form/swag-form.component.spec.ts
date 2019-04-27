import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagFormComponent } from './swag-form.component';

describe('SwagFormComponent', () => {
  let component: SwagFormComponent;
  let fixture: ComponentFixture<SwagFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwagFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
