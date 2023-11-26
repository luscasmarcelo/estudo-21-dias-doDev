//definição do objeto
class Aluno {
    nome
    idade
    areaAtuacao
    constructor(nome, idade) {
        this.nome = nome //this. acessa a propriedade definida na class
        this.idade = idade
    }
}

let alunos = [] //arrray para armazenar
let indexAluno = 0 //para achar a posição no array
let continuar = true //enquanto o loop for true, continua

while(continuar) {
    //prompts de entrada
    let nome = prompt("Insira o nome do aluno:")
    let idade = parseInt(prompt("Insira a idade:"))
    let aluno = new Aluno(nome, idade) //"criando o objeto" aluno

    let areaAtuacao = prompt("Insira a area de atuação:")
    aluno.areaAtuacao = areaAtuacao

    alunos[indexAluno] = aluno
    let desejaContinuar = prompt("Digite '1' se deseja inserir mais alunos")
    if (desejaContinuar != "1") {
        continuar = false
    } else {
        indexAluno++
    }
}