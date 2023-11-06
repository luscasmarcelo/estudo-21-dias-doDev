let nome = "";
let idade = 0;
let peso = 0;
let altura = 0;

nome = prompt("insira seu nome: ");
idade = prompt("insira sua idade: ");
peso = prompt("insira seu peso: ");
altura = prompt("insira sua altura: ");

let anoNasc = 0;
anoNasc = 2023 - idade;

let imc = 0;
imc = peso / (altura * altura);

console.log("olá "+nome+ ", você tem "+idade+ " anos, nasceu em "+anoNasc+ ", tem "+altura+ " de altura, pesa "+peso+ "kg e seu IMC É de "+imc+ "kg/m2")
