import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kanban } from '../model/kanban';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {
  // tslint:disable-next-line: typedef

  constructor(private http: HttpClient) { }

  listar(): Observable<Kanban[]> {
    return this.http.get<Kanban[]>(environment.apiEndpoint + 'todo');
  }

  inserir(todo?: Kanban): Observable<Kanban> {
    // tslint:disable-next-line: curly
    if (!todo) return EMPTY;
    return this.http.post<Kanban>(environment.apiEndpoint + 'todo', todo);
  }

  atualizar(todo?: Kanban): Observable<Kanban> {
    // tslint:disable-next-line: curly
    if (!todo) return EMPTY;
    return this.http.put<Kanban>(environment.apiEndpoint + 'todo/' + todo.id, todo);

  }

  excluir(id?: number): Observable<any>{
    if (!id) { return EMPTY; }
    return this.http.delete<any>(environment.apiEndpoint + 'todo/' + id);

  }
}
