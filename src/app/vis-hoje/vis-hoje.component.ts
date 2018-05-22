import { Component, OnInit} from '@angular/core';
import { Tarefa } from '../tarefas';
import { VisTarefaComponent } from '../vis-tarefa/vis-tarefa.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vis-hoje',
  templateUrl: './vis-hoje.component.html',
  styleUrls: ['./vis-hoje.component.css']
})
export class VisHojeComponent implements OnInit{

 title = 'Hoje'
 date = new Date();
 tarefa
 tarefas=[]
 index
 selectedTarefa: Tarefa;
 dataHoje= this.date.getFullYear().toString() + '-' +(this.date.getMonth() + 1 ) + '-' + this.date.getDate() ;

 constructor(private router: Router){}

 ngOnInit() {
   
  if(this.date.getMonth()< 10){
    this.dataHoje= this.date.getFullYear().toString() + '-' +'0'+(this.date.getMonth() + 1 ) + '-' + this.date.getDate();
  }
  
  for (let index = 0; index < localStorage.length; index++) {

    this.tarefa = JSON.parse(localStorage.getItem(localStorage.key(index)));
    
   
    if(this.tarefa.date == this.dataHoje){
     
      this.tarefas.push(this.tarefa);

     }

    
  }
  
}
onSelect(tarefa: Tarefa): void {
  this.selectedTarefa = tarefa;
  this.router.navigate(['vis-tarefa']);
 
}



}

