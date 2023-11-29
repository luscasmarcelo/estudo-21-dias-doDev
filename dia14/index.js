function perguntarColaborador() {
    let nome = prompt("Informe seu nome:");
    let salario = parseFloat(prompt("Informe seu salário atual:"))
    calcularAumento(nome, salario)
}

function calcularAumento(nome, salario) {
    let aumento = 0

    if (salario <= 1500) {
        aumento = 0.2
    } else if (salario > 1501 && salario <= 2000) {
        aumento = 0.15
    } else if(salario >= 2001 && salario <= 3000) {
        aumento = 0.1
    } else {
        aumento = 0.05
    }

    let novoSalario = salario + (salario * aumento)
    alert(`Nome do colaborador: ${nome}`)
    alert(`Salário do colaborador sem o aumento: ${salario}`)
    alert(`Você tem direito a ${aumento}% de aumento`)
    alert(`Seu salário reajustado é de: ${novoSalario}`)

    perguntarNovamente()
}

function perguntarNovamente() {
    let resposta = prompt("Deseja calcular novamente? (sim/nao")
        if (resposta === "sim") {
            perguntarColaborador()
        } else {
            alert("Programa encerrado!")
        }
    }


perguntarColaborador()



