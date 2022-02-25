import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { KanbanService } from 'src/app/service/kanban.service';
import { Kanban } from 'src/app/model/kanban';



@Component({
  selector: 'app-projeto-kanban',
  templateUrl: './projeto-kanban.component.html',
  styleUrls: ['./projeto-kanban.component.css'],
})
export class ProjetoKanbanComponent implements OnInit {

  constructor(private kanbanService: KanbanService) { }
  todo = new Array<Kanban>();
  todo1?: Kanban;
  modoEdicao = false;
  todo2?: Kanban;
  done = [];
  doing = [];

// função drop para utilizar a lib, Cdk do material


  // tslint:disable-next-line: typedef
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  ngOnInit(): void {
    this.listarTodo();

  }
  listarTodo(): void {
    this.kanbanService.listar().subscribe(todo => {
      this.todo = todo;
    });
  }

  // funções abaixo CRUD, das Tasks

  novo(): void {
    this.todo1 = new Kanban();
    this.modoEdicao = false;
  }

  cancelar(): void {
    this.todo1 = undefined;
  }


  salvar(): void {
    if (!this.modoEdicao) {
      this.kanbanService.inserir(this.todo1).subscribe(todo1 => {
        this.listarTodo();
        this.cancelar();
      });
    }
    else {
      this.kanbanService.atualizar(this.todo1).subscribe(() => {
        this.listarTodo();
        this.cancelar();
      });
    }
  }

  editar(todo: Kanban): void {
    this.todo1 = todo;
    this.modoEdicao = true;

  }

  excluir(id?: number): void {
    if (!id) { return; }
    this.kanbanService.excluir(id).subscribe(() => {
      this.listarTodo();
      this.cancelar();
    });
  }
  // esta função verifica onde esta a task, e troca a tabela da mesma no banco de dados

  chegou(tabela: string): void {
    if (tabela === 'todo') {
      if (this.todo2){
          this.todo2.tipo = 1;
      }
      this.todo1 = new Kanban();
      this.todo1 = this.todo2;
      this.kanbanService.atualizar(this.todo1).subscribe(() => {
        this.listarTodo();
      });
      this.cancelar();
    }
    if (tabela === 'doing') {
      if (this.todo2){
          this.todo2.tipo = 2;
      }
      this.todo1 = new Kanban();
      this.todo1 = this.todo2;
      this.kanbanService.atualizar(this.todo1).subscribe(() => {
        this.listarTodo();
      });
      this.cancelar();
    }
    if (tabela === 'done') {
      if (this.todo2){
          this.todo2.tipo = 3;
      }
      this.todo1 = new Kanban();
      this.todo1 = this.todo2;
      this.kanbanService.atualizar(this.todo1).subscribe(() => {
        this.listarTodo();
      });
      this.cancelar();
    }
  }

// pega os dados e armazena

  informacao(item: Kanban): void {
    this.todo2 = item;
  }

}
