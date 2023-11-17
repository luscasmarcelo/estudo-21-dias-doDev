//criando variaveis e loop
let confirmar = "nao"
let salarioAtual = 0
while (confirmar != "sim") {
    let nome = prompt("Insira seu nome:")
    let idade = parseInt(prompt("Informe sua idade:"))
    salarioAtual = parseFloat(prompt("Informe seu salário atual:"))

    alert(nome + `, voce tem ` + idade + ` anos e seu salário atual é R$${salarioAtual}`)
    confirmar = prompt("As informações estão corretas? (sim/nao)")
}

let aumento = 0.015
alert("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salarioAtual)
}