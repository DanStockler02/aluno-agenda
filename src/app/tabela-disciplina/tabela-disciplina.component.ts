import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina';


@Component({
  selector: 'app-tabela-disciplina',
  templateUrl: './tabela-disciplina.component.html',
  styleUrls: ['./tabela-disciplina.component.css']
})
export class TabelaDisciplinaComponent implements OnInit {

  
  nome
  professor
  horario
  disciplina : Disciplina
  disciplinas = []
  verifica : number = 1000

  constructor() { }

  ngOnInit() {
    console.log(0);
    this.ListaConsultas();
  }

  ListaConsultas(){
    this.disciplinas = []
    for (let index = 0; index < localStorage.length; index++) {
      this.disciplina = JSON.parse(localStorage.getItem(localStorage.key(index)));
      var chaveamento = parseInt(this.disciplina.chave);
      if(chaveamento <= this.verifica){
        this.disciplinas.push(this.disciplina);
      }
      
    }
  }

  ExcluirDisciplina(chave){
    localStorage.removeItem(chave);  
  }
}
