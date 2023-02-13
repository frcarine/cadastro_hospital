import { Paciente } from "./models/paciente";

let paciente:Paciente[] =[];

let Paciente2:Paciente =new Paciente();
Paciente2.nome = "CARINE";
Paciente2.cpf= "0222222222";
Paciente2.sexo= "FEM"


console.log(paciente)
paciente.push(Paciente2)
console.log(Paciente2)