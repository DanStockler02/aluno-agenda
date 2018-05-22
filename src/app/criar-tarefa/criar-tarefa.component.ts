import { Component} from '@angular/core';
import { Button } from 'protractor';
import { stringify } from '@angular/compiler/src/util';
import { NgModel } from '@angular/forms';
import { Tarefa } from '../tarefas';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Disciplina } from '../disciplina';


@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent  {

 nome
 date
 diciplina
 descricao
 estado
 disc 
 dp : Disciplina
 vdisc = []
 tarefa : Tarefa



addDisciplina(){

  for (let index = 0; index < localStorage.length; index++) {
    this.disc = JSON.parse(localStorage.getItem(localStorage.key(index)));
    if(this.disc.chave < 60){
      this.vdisc.push(this.disc.nome);
    }
    
  }
 
}


 CriarTarefa(){
  
  var chavedate = new Date();
  var time = chavedate.getTime();
  var chave: string = 'lista-'+ time;

   this.tarefa = new Tarefa(
   chave,
   this.nome,
   this.date,
   this.diciplina,
   this.descricao,
   0
 );

 localStorage.setItem(chave,JSON.stringify(this.tarefa));
 this.nome = null;
 this.date = null;
 this.diciplina = null;
 this.descricao = null;
 this.estado = null;
 }

 
 

  }
  


