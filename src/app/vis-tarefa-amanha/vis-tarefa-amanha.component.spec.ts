import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisTarefaAmanhaComponent } from './vis-tarefa-amanha.component';

describe('VisTarefaAmanhaComponent', () => {
  let component: VisTarefaAmanhaComponent;
  let fixture: ComponentFixture<VisTarefaAmanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisTarefaAmanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisTarefaAmanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
