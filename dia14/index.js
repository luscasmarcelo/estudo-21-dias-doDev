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
    alert(`${nome}, seu novo salário é: ${novoSalario.toFixed(2)}`)
}

perguntarColaborador()



