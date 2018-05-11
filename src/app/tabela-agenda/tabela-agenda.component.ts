import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas';

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

  constructor() {}

  ngOnInit() {
     this.ListaConsultas();
  }

  ListaConsultas(){
    this.tarefas = []
    for (let index = 0; index < localStorage.length; index++) {
      this.tarefa = JSON.parse(localStorage.getItem(localStorage.key(index)));
      this.tarefas.push(this.tarefa);
    }
  }

  AlteraStatus(chave){
    this.tarefa = JSON.parse(localStorage.getItem(chave));
    if (this.tarefa.estado == 1) {
      this.tarefa.estado = 0;
    } else {
      this.tarefa.estado = 1;
    }
    this.tarefa = { "chave": this.tarefa.chave, "nome":this.tarefa.nome, "date": this.tarefa.date, "descricao": this.tarefa.descricao, "estado": this.tarefa.estado  }
    localStorage.setItem(chave,JSON.stringify(this.tarefa));
    this.ListaConsultas();
}
