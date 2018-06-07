import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VisHojeComponent } from './vis-hoje/vis-hoje.component';
import { CriarTarefaComponent } from './criar-tarefa/criar-tarefa.component';
import { routing } from './app.routing';
import { TabelaAgendaComponent } from './tabela-agenda/tabela-agenda.component';
import { HeaderComponent } from './header/header.component';
import { VisTarefaComponent } from './vis-tarefa/vis-tarefa.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { VisAmanhaComponent } from './vis-amanha/vis-amanha.component';
import { VisTarefaAmanhaComponent } from './vis-tarefa-amanha/vis-tarefa-amanha.component';
import { TabelaDisciplinaComponent } from './tabela-disciplina/tabela-disciplina.component';
import { EditarDisciplinaComponent } from './editar-disciplina/editar-disciplina.component';


@NgModule({
  declarations: [
    AppComponent,
    VisHojeComponent,
    CriarTarefaComponent,
    TabelaAgendaComponent,
    HeaderComponent,
    VisTarefaComponent,
    DisciplinaComponent,
    EditarTarefaComponent,
    VisAmanhaComponent,
    VisTarefaAmanhaComponent,
    TabelaDisciplinaComponent,
    EditarDisciplinaComponent
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
