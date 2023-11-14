let saldo = 1000
let maiorValorInserido = 0
let somaValoresInseridos = 0
let totalTransacoes = 0
let continuar = false

do {
    const nome = prompt("insira seu nome:")
    const cpf = Number((prompt("Insira seu CPF:")))
    const valor = Number((prompt("Insira o valor da transação:")))
    const operacao = prompt("Que operação deseja realizar? (saque/deposito)")

    if (valor < 0) {
        alert("Operação não concluída, valor inválido!")
    }else if (operacao == "saque" && valor > saldo) {
        alert("Não foi possível realizar o saque, saldo indisponível.")
    }else if (operacao == "saque") {
        alert(`Olá, ${nome} (${cpf}), seu saldo atual é: R$(${saldo}).`)
        saldo -= valor
        totalTransacoes++
        somaValoresInseridos += valor
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        alert(`Transação realizada com sucesso. Seu saldo atual é: R$(${saldo}).`)
    }else {
        alert(`Olá ${nome}, (${cpf}), seu saldo atual é R$${saldo}.`)
        saldo += valor
        totalTransacoes++
        somaValoresInseridos += valor
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor
        }
        alert(`Transação concluida com sucesso. Seu saldo atual é R$${saldo}.`)
    }

    const opcao = Number(prompt("Deseja continuar? (1- para continuar \n2- para parar"))
    if (opcao == 1) {
        continuar = true
    }else if (opcao == 2) {
        continuar = false
    }else {
        alert("Opção inválida!, Operação encerrada.")
        continuar = false
    }

} while (continuar);

alert(`Saldo final: R$${saldo}`)
alert(`Maior valor inserido: R$${maiorValorInserido}`)
alert(`Média de valores inseridos: R$${somaValoresInseridos / totalTransacoes}`)