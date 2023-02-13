export class Paciente {
    nome: string = "";
    cpf: string = "";
    sexo: string ="";


    toString(){
        let nome = "teste"
        return `Nome: ${this.nome} Cpf: ${this.cpf}  Sexo: ${this.sexo}`;

    }
}
