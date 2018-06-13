import { Component, OnInit} from '@angular/core';
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
export class CriarTarefaComponent implements OnInit {

 nome
 date
 diciplina
 descricao
 estado
 vdisc = []
 dis
 tarefa : Tarefa
 verifica :number = 1000


 ngOnInit() {
  
  for (let index = 0; index < localStorage.length; index++) {
    this.dis= JSON.parse(localStorage.getItem(localStorage.key(index)));

    var chaveamento = parseInt(this.dis.chave);
    
    if(chaveamento < this.verifica){
      this.vdisc.push(this.dis.nomedis);
      console.log(this.vdisc);
    }
    
  }
 
}

 CriarTarefa(){
  
  var chavedate = new Date();
  var time = chavedate.getTime();
  var chave: string = time.toString();

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
  


