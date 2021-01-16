import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PddviewComponent } from './pddview.component';

describe('PddviewComponent', () => {
  let component: PddviewComponent;
  let fixture: ComponentFixture<PddviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PddviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PddviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
