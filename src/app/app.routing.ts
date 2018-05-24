import { Routes, RouterModule } from '@angular/router';
import { VisHojeComponent } from './vis-hoje/vis-hoje.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { TabelaAgendaComponent } from './tabela-agenda/tabela-agenda.component';
import { VisTarefaComponent } from './vis-tarefa/vis-tarefa.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ModuleWithProviders } from '@angular/core';
import { VisTarefaAmanhaComponent } from './vis-tarefa-amanha/vis-tarefa-amanha.component';

const APP_ROUTES: Routes = [
       
    {path: 'criartarefa', component: CriarTarefaComponent},
    { path: '', component: VisHojeComponent  },
    { path: 'tabela-agenda', component: TabelaAgendaComponent},   
    { path: 'vis-tarefa', component: VisTarefaComponent},
    { path: 'disciplina', component: DisciplinaComponent},
    { path: 'vis-tarefa-amanha', component: VisTarefaAmanhaComponent}
    

] ;

export const routing: ModuleWithProviders= RouterModule.forRoot(APP_ROUTES);