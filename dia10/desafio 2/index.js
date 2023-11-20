const array = []
const arrayInvertido = []

for (i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"))
    array[i] = numero
}

console.log("Array original: " + array)

//array invertido
let contador = 4
for (i = 0; i < 5; i++) {
    arrayInvertido[i] = array[contador]
    contador--
}

console.log("Array invertido: " + arrayInvertido)