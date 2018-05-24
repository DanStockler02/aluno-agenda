import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vis-tarefa-amanha',
  templateUrl: './vis-tarefa-amanha.component.html',
  styleUrls: ['./vis-tarefa-amanha.component.css']
})
export class VisTarefaAmanhaComponent implements OnInit {
  tarefa
  tarefas=[]
  selectedTarefa: Tarefa;
  index
  date = new Date();
  dataHoje= this.date.getFullYear().toString() + '-' +(this.date.getMonth() + 1 ) + '-' + (this.date.getDate()+1) ;
  
  ngOnInit() {

    if(this.date.getMonth()< 10){
      this.dataHoje= this.date.getFullYear().toString() + '-' +'0'+(this.date.getMonth() + 1 ) + '-' + (this.date.getDate()+1);
    }
  
    for (let index = 0; index < localStorage.length; index++) {
  
      this.tarefa = JSON.parse(localStorage.getItem(localStorage.key(index)));
      
        console.log(this.dataHoje);

       if(this.tarefa.date == this.dataHoje){
        
         this.onSelect(this.tarefa);
         this.tarefas.push(this.tarefa);

        }

    }

  }
  
  onSelect(tarefa: Tarefa): void {
    this.selectedTarefa = tarefa;
  
  }
}
