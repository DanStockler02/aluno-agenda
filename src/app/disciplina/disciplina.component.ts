import { Component} from '@angular/core';
import { Disciplina } from '../disciplina';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.component.html',
  styleUrls: ['./disciplina.component.css']
})
export class DisciplinaComponent  {

 nomedis
 nomeProf
 horario
 disciplina : Disciplina

 CriarDisciplina(){

  var chavedate = new Date();
  var time = chavedate.getSeconds();
  var chave :string  = Math.floor((Math.random()*999)+1).toString();

    this.disciplina = new Disciplina(
      chave,
      this.nomedis,
      this.nomeProf,
      this.horario

    );

    localStorage.setItem(chave,JSON.stringify(this.disciplina));  
    this.nomedis= null
    this.nomeProf = null
    this.horario = null
 }



}
