import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas';
import { EditarTarefaComponent } from '../editar-tarefa/editar-tarefa.component'


@Component({
  selector: 'app-tabela-agenda',
  templateUrl: './tabela-agenda.component.html',
  styleUrls: ['./tabela-agenda.component.css']
})
export class TabelaAgendaComponent implements OnInit {

  estado
  feito = []
  feitos = []
  tarefa
  tarefas = []
  verifica :number = 1000
  
  

  ngOnInit() {
     this.ListaConsultas();
  }

  ListaConsultas(){
    this.tarefas = []
    for (let index = 0; index < localStorage.length; index++) {
      this.tarefa = JSON.parse(localStorage.getItem(localStorage.key(index)));
      var chaveamento = parseInt(this.tarefa.chave);
      if(chaveamento > this.verifica){
        this.tarefas.push(this.tarefa);
      }
      
    }
  }

  AlteraStatus(chave){
    this.tarefa = JSON.parse(localStorage.getItem(chave));
    if (this.tarefa.estado == 1) {
      this.tarefa.estado = 0;
    } else {
      this.tarefa.estado = 1;
    }
    this.tarefa = { "chave": this.tarefa.chave, "nome":this.tarefa.nome, "date": this.tarefa.date,"diciplina": this.tarefa.diciplina, "descricao": this.tarefa.descricao, "estado": this.tarefa.estado  }
    localStorage.setItem(chave,JSON.stringify(this.tarefa));
    this.ListaConsultas();
  }

  excluirTarefa(chave){
    localStorage.removeItem(chave);   

  }
  
}