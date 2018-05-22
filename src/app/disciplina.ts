export class Disciplina{
    
    chave: string
    nome: string;
    nomeProf: string;
    horario: string;



    constructor(
          
        chave: string,
        nome: string,
        nomeProf: string,
        horario: string

    ){ 
        this.chave = chave;
        this.nome = nome;
        this.nomeProf = nomeProf;
        this.horario = horario;
    }
    
    

}