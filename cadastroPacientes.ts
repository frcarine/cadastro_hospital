import { Paciente } from "./models/paciente";
import promptSync from "prompt-sync";

const hospital = promptSync();

const qt = +hospital("Informe a quantidade");
let pacienteLista: Paciente[] = [];

for (let i = 0; i < qt; i = i + 1) {
  console.log("Cadastro de Paciente =" + i);
  let paciente: Paciente = new Paciente();
  paciente.nome = hospital("Informe nome:");
  paciente.cpf = hospital("Informe cpf:");
  paciente.sexo = hospital("Informe o sexo:");
  pacienteLista.push(paciente);
  console.clear();
}
console.log("FOR");
for (let i = 0; i < pacienteLista.length; i = i + 1) {
  const paciente = pacienteLista[i];
  console.log(paciente.toString);
}

console.log("FOR EACH");
pacienteLista.forEach((p) => {
  console.log(p.toString());
});

const paciente = pacienteLista[1];

console.log("Lista de Paciente");

console.log("Nome  /Cpf  /Sexo");
for (let x = 0; x < qt; x = x + 1) {
  const paciente = pacienteLista[x];
  console.log(
    `Nome: ${paciente.nome} | CPF: ${paciente.cpf} | SEXO:${paciente.sexo}`
  );
}
