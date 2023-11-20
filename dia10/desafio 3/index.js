const array = []
const arrayInvertido = []
let quantidade = parseInt(prompt("Digite a quantidade de números que deseja inserir no Array:"))

for (i = 0; i < quantidade; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"))
    array[i] = numero
}

console.log("Array original: " + array)

let contador = quantidade - 1
for (i = 0; i < quantidade; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Esse é o Array invertido: " + arrayInvertido)