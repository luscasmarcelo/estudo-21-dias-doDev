let alunos = []
let notas = []
let contador = 0
let continuar = true

while (continuar) {
    let nome = prompt("Insira o nome do " + (contador + 1 ) + "º aluno:")
    let nota = parseFloat(prompt("Insira a nota do aluno:"))
    alunos[contador] = nome
    notas[contador] = nota
    contador++ 
    let resposta = prompt("Deseja continuar? (sim/nao)")
    if (resposta === "nao")
        continuar = false
}

console.log("Notas dos alunos")
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] + " - " + notas[i])
}

let somaNotas = 0
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i]
}

let media = somaNotas / alunos.length

console.log("A soma das notas foi: " + somaNotas)
console.log("A média da turma foi: " + media)