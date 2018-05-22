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


@NgModule({
  declarations: [
    AppComponent,
    VisHojeComponent,
    CriarTarefaComponent,
    TabelaAgendaComponent,
    HeaderComponent,
    VisTarefaComponent,
    DisciplinaComponent
   
    
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
