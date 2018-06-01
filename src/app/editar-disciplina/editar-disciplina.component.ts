import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Disciplina } from '../disciplina';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { stringify } from '@angular/compiler/src/util';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { Button } from 'protractor';

@Component({
  selector: 'app-editar-disciplina',
  templateUrl: './editar-disciplina.component.html',
  styleUrls: ['./editar-disciplina.component.css']
})
export class EditarDisciplinaComponent implements OnInit {
  chave
  nome
  professor
  horario
  disciplina : Disciplina
  disciplinas = []
  verifica : number = 1000

  constructor(private route: ActivatedRoute) { 
    this.chave = route.snapshot.params.chave;
  }

  ngOnInit() {
  }

  editarDisciplina(){
    this.disciplina = new Disciplina (
    this.chave,
    this.nome,
    this.professor,
    this.horario,
  );

  localStorage.setItem(this.chave,JSON.stringify(this.disciplina));
  this.nome = null;
  this.professor = null;
  this.horario = null;
}

}
