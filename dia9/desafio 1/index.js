//coletando dados do usuário
let nome = prompt("Insira seu nome:")
let idade = Number(prompt("Insira sua idade:"))
let peso = Number(prompt("Informe seu peso:"))
let altura = Number(prompt("Informe sua altura:"))
let profissao = prompt("Informe sua profissão:")

//imprimindo dados em tela
alert("Olá "+ nome + ", você tem "+ idade + " anos, é "+ profissao + ", tem "+ altura + "M de altura e pesa "+ peso + "kg.")

//verificando se o usuário é maior de idade
if (idade >= 18) {
    alert(nome + ", você está liberado(a) para tomar umas geladas!!!")
}else {
    alert(nome + ", sem gelada pra você.")
}

//calculando idade em meses/semanas/dias
let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

alert("Sua idade em meses é: " + meses)
alert("Sua idade em semanas é: " + semanas)
alert("Sua idade em dias é: " + dias) 

//calculando IMC do usuário
imc = peso / (altura * altura)
if ( imc < 18.5) {
    alert("Resultado IMC: Magreza")
}else if (imc >= 18.5 && imc <= 24.9) {
    alert("Resultado IMC: Normal")
}else if (imc >= 24.9 && imc <= 30) {
    alert("Resultado IMC: Sobrepeso")
}else {
    alert("Resultado IMC: Obeso")
}

//descobrir ano de nascimento do usuário
let anoAtual = 2023
let anoNasc = anoAtual - idade;
alert(nome + ", você nasceu em "+ anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for (anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    alert(anoVivido + " - " + idadeAtual + " anos de idade.")
    idadeAtual++
}

//perguntar se o usuário quer continuar
do {
    let continuar = prompt("Deseja continuar? (sim/nao)")
} while (continuar === "sim");
