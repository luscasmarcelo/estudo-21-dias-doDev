let mediaGeral = 0
let qtdHomens = 0
let qtdMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

while (contador <= 10) {
    nota = parseInt(prompt("Insira a nota do "+ contador + "º aluno"))
    sexo = prompt("Insira o sexo do aluno (m/f)")

    if (sexo == "m") {
        if ( nota > maiorNotaHomens) {
            maiorNotaHomens = nota
        }
        qtdHomens++
    }
    
    if (sexo == "f" && nota > 7) {
        qtdMulheresAcimaDe7++
    }

    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

alert("A média geral entre os alunos foi de: " + mediaGeral)
alert("A quantidade de homens cadastrados foi de: " + qtdHomens)
alert("A quantidade de mulheres que tiveram notas acima de 7 foi: " +qtdMulheresAcimaDe7)
alert("A maior nota entre os homens foi: " + maiorNotaHomens)