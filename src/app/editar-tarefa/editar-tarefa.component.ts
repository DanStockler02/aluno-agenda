import { Component, OnInit} from '@angular/core';
import { Button } from 'protractor';
import { stringify } from '@angular/compiler/src/util';
import { NgModel } from '@angular/forms';
import { Tarefa } from '../tarefas';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Disciplina } from '../disciplina';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  chave
  nome
  date
  diciplina
  descricao
  estado
  vdisc = []
  dis
  tarefa : Tarefa
  verifica :number = 1000

  constructor(private route: ActivatedRoute){
    this.chave = route.snapshot.params.chave;
  }
  
  ngOnInit() {
   for (let index = 0; index < localStorage.length; index++) {
     this.dis= JSON.parse(localStorage.getItem(localStorage.key(index)));
 
     var chaveamento = parseInt(this.dis.chave);
     
     if(chaveamento < this.verifica){
       this.vdisc.push(this.dis.nomedis);
       console.log(this.vdisc);
     }
     
   }
  this.tarefa = JSON.parse(localStorage.getItem(this.chave));
 }
 
  editarTarefa(){
    this.tarefa = new Tarefa(
    this.chave,
    this.nome,
    this.date,
    this.diciplina,
    this.descricao,
    0
  );
 
  localStorage.setItem(this.chave,JSON.stringify(this.tarefa));
  this.nome = null;
  this.date = null;
  this.diciplina = null;
  this.descricao = null;
  this.estado = null;
  }
 }
