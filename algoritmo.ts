import promptSync from "prompt-sync";

const hospital = promptSync();

const nome = hospital("Informe seu nome");
const cpf = hospital("Informe seu cpf");
const sexo = hospital("Informe seu sexo");

console.log("Olá "+ nome+ cpf+sexo+"")

const qt = +hospital("Informe a quantidade");
