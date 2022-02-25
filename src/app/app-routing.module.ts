import { SobreComponent } from './views/sobre/sobre.component';
import { ProjetoKanbanComponent } from './view/projeto-kanban/projeto-kanban.component';
import { Kanban } from './model/kanban';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'kanban', component : ProjetoKanbanComponent},
  {path: 'sobre', component : SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
