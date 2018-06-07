import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas';
import { VisHojeComponent } from '../vis-hoje/vis-hoje.component';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-vis-tarefa',
  templateUrl: './vis-tarefa.component.html',
  styleUrls: ['./vis-tarefa.component.css']
})
export class VisTarefaComponent implements  OnInit{

  tarefa
  tarefas=[]
  selectedTarefa: Tarefa;
  index
  date = new Date();
  dataHoje= this.date.getFullYear().toString() + '-' +(this.date.getMonth() + 1 ) + '-' + this.date.getDate() ;
  
  ngOnInit() {

    if(this.date.getMonth()< 10 && this.date.getDate() < 10){
      this.dataHoje= this.date.getFullYear().toString() + '-' +'0'+(this.date.getMonth() + 1 ) + '-' + '0'+this.date.getDate();
      console.log(this.dataHoje);
    }else if(this.date.getMonth()< 10){
      this.dataHoje= this.date.getFullYear().toString() + '-' +'0'+(this.date.getMonth() + 1 ) + '-' + this.date.getDate();
      console.log(this.dataHoje);
    }else if(this.date.getDate()< 10){
      this.dataHoje= this.date.getFullYear().toString() + '-' +(this.date.getMonth() + 1 ) + '-' + '0'+this.date.getDate();
      console.log(this.dataHoje);
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
