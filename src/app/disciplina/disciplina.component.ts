import { Component} from '@angular/core';
import { Disciplina } from '../disciplina';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent  {

 nome
 nomeProf
 horario
 disciplina : Disciplina

 CriarDisciplina(){

  var chavedate = new Date();
  var time = chavedate.getSeconds();
  var chave: string = 'lista-' + time;

    this.disciplina = new Disciplina(
      chave,
      this.nome,
      this.nomeProf,
      this.horario

    );

    localStorage.setItem(chave,JSON.stringify(this.disciplina));
    
    this.disciplina = null
    this.nomeProf = null
    this.horario = null
 }



}
