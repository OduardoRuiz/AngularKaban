import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoKanbanComponent } from './projeto-kanban.component';

describe('ProjetoKanbanComponent', () => {
  let component: ProjetoKanbanComponent;
  let fixture: ComponentFixture<ProjetoKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetoKanbanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
