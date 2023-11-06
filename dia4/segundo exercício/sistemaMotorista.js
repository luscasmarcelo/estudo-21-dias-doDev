let nome
let idade
let temCarta = false;
let temCarro = false;

nome = prompt("Digite seu nome: ");
idade = parseInt(prompt("insira sua idade: "));

let opcaoCarta = prompt("Você tem carta de motorista? (sim/não")
if(opcaoCarta === "sim") {
    temCarta = true;
}
let opcaoCarro = prompt("Você tem carro? (sim/não)")
if (opcaoCarro === "sim") {
    temCarro = true;
}

if (nome < 18 || !temCarta) {
    console.log(nome + ", você não pode dirigr!")
}else if (idade >= 18 && temCarta && !temCarro) {
    console.log(nome + ", você pode dirigir mas não tem um carro.")
} else {
    console.log(nome + ", você será o motorista!")
}