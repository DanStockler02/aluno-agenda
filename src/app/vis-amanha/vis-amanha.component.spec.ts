import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisAmanhaComponent } from './vis-amanha.component';

describe('VisAmanhaComponent', () => {
  let component: VisAmanhaComponent;
  let fixture: ComponentFixture<VisAmanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisAmanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisAmanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
