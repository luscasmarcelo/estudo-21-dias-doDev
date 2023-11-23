let nomes = []
let senhas = []
let contador = 0

let continuar = true

while (continuar) {

    let escolha = prompt("Escolha uma opção:\n1 - Cadastrar\n2 - Login\n3 - Excluir um cadastro\n4 - Encerrar programa")

    switch (escolha) {
        case '1':
            nomes[contador] = prompt("Insira seu nome:")
            senhas[contador] = prompt("Insira uma senha:")
            contador++
            break;
        case '2':
            let nome = prompt("Insira seu nome:")
            let senha = prompt("Insira sua senha:")
            let loginValido = false

            for (let i = 0; i < nomes.length; i++) {
                if (nome === nomes[i] && senha === senhas[i]) {
                    loginValido = true
                }
            }

            if (loginValido) {
                alert("login feito com sucesso!")
            } else {
                alert("Login ou senha incorretos")
            }
            break;
        case '3':
            let nomeExcluir = prompt("Insira o nome que deseja excluir:")
            let nomesAux = []
            let senhasAux = []
            let contadorAux = 0

            for (let i = 0; i < contador; i++) {
                if (nomeExcluir == nomes[i]){
                    alert("Cadastro excluido com sucesso!")
                } else {
                    nomesAux[contadorAux] = nomes[i]
                    senhasAux[contadorAux] = senhas[i]
                    contadorAux++
                }
            }

            nomes = nomesAux
            senhas = senhasAux
            contador--

            break;
        case '4':
            continuar = false
            break;
    }
}