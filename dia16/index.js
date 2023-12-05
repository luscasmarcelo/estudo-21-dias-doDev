let nomes = []
let senhas = []

function solicitarOpcao() {
    let opcao = prompt("Escolha uma opção:\n1 - Cadastrar\n2 - Fazer Login\n3 - Excluir cadastro\n4 - Sair do programa")
    return opcao
}

function novoCadastro() {
    nomes.push(prompt("Digite seu nome:"))
    senhas.push(prompt("Digite uma senha"))
}

function fazerLogin(nome, senha) {
    let indiceNome = nomes.indexOf(nome)
    let indiceSenha = senhas.indexOf(senha)

    if (indiceNome !== -1 && indiceNome === indiceSenha) {
        return true
    } else {
        return false
    }
}

function excluirCadastro(nome) {
    let indiceNome = nomes.indexOf(nome)

    if (indiceNome !== -1) {
        nomes.splice(indiceNome, 1)
        senhas.splice(indiceNome, 1)
        alert("Cadastro excluído com sucesso!")
    } else {
        alert("Nome não encontrado.")
    }
}

let continuar = true

while (continuar) {
    let opcao = solicitarOpcao()
    switch (opcao) {
        case "1":
            novoCadastro()
            break;
        case "2":
            let nome = prompt("Digite seu nome:")
            let senha = prompt("Digite sua senha:")

            if (fazerLogin(nome, senha)) {
                alert("Login bem sucedido!")
            } else {
                alert("Nome ou senha inválido.")
            }
            break;
        case "3":
            let nomeExcluir = prompt("Informe o nome que deseja excluir:")
            excluirCadastro(nomeExcluir)
            break;
        case "4":
            continuar = false
            alert("Fechando o programa...")
            break;
        default:
            alert("Opção invalida!")
    }
}