let fibonacci = []
let numero = parseInt(prompt("Digite um número inteiro e positivo: "))
fibonacci[0] = numero - 1
fibonacci[1] = numero

for (i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log("Fibonacci : " + fibonacci)