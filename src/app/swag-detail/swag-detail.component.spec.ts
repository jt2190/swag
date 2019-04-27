import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagDetailComponent } from './swag-detail.component';

describe('SwagDetailComponent', () => {
  let component: SwagDetailComponent;
  let fixture: ComponentFixture<SwagDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwagDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
