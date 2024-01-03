//classe hotel
class Hotel {
    id
    nome
    categoria
    endereco
    telefone
    constructor(id, nome, categoria, endereco, telefone) {
        this.id = id
        this.nome = nome
        this.categoria = categoria
        this.endereco = endereco
        this.telefone = telefone
    }
}
//classe reserva
class Reserva {
    id
    idHotel
    nomeResponsavel
    diaEntrada
    diaSaida
    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida) {
        this.id = id
        this.idHotel = idHotel
        this.nomeResponsavel = nomeResponsavel
        this.diaEntrada = diaEntrada
        this.diaSaida = diaSaida
    }
}

let hoteis = []
let reservas = []
let idHotel = 1
let idReserva = 1

//cadastrar hotel
function cadastrarHotel() {
    let nome = prompt("Informe o nome do hotel:")
    let categoria = parseInt(prompt("Informe a categoria do hotel:"))
    let endereco = prompt("Informe o endereço do hotel:")
    let telefone = parseInt(prompt("Informe o telefone do hotel:"))
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++
    hoteis.push(hotel)
}

//cadastrar reserva
function cadastrarReserva() {
    let idHotel
    let existe = false
    do {
        idHotel = parseInt(prompt("Infome o ID do hotel:"))
        for (let i = 0; i < hoteis.length; i++) {
            if (idHotel == hoteis[i].id) {
                i = hoteis.length
                existe = true
            } else if (i == hoteis.length - 1) {
                alert("ID de hotel não cadastrado!")
            }
        }
    } while (!existe)

    //solicita informações para reserva
    let nomeResponsavel = prompt("Informe o nome do responsável pela reserva:")
    let diaEntrada = parseInt(prompt("Informe o dia da entrada:"))
    let diaSaida
    do {
        diaSaida = parseInt(prompt("Informe o dia da saída:"))
        if (diaSaida < diaEntrada) {
            alert("O dia de saída deve ser maior que o dia de entrada")
        }
    } while (diaSaida < diaEntrada)

    //criação de uma instancia 
    let reserva = new Reserva(idReserva, idHotelReserva, nomeResponsavel, diaEntrada, diaSaida)
    idReserva++

    //adição da reserva ao array reservas
    reservas.push(reserva)
    
    alert("reserva realizada com sucesso!")
}

//função para procurar reservas pelo hotel
function procurarReservasPeloHotel(idHotel) {
    reservas.forEach(reserva => {
        if (idHotel == reserva.IdHotel) {
            let i = idHotel - 1
            alert("Hotel:", hoteis[i].Nome)
            alert("Responsável:", reserva.nomeResponsavel)
            alert("Dia entrada:", reserva.diaEntrada)
            alert("Dia saída:", reserva.diaSaida)
        }
    })
}

//função para procurar hotel pela reserva
function procurarHotelPelaReserva(idReserva) {
    let idHotel = reservas[idReserva - 1].idHotel
    alert("hotel: ", hoteis[idHotel - 1].Nome)
    alert("endereço: ", hoteis[idHotel - 1].endereco)
    alert("dia de entrada: ", reservas[idReserva - 1].diaEntrada)
    alert("dia de saída: ", reservas[idReserva - 1].diaSaida)
}

//função para procurar reserva pelo responsável
function ProcurarReservaPeloNome(nome) {
    for (let i = 0; i < reservas.length; i++) {
        if (nome == reservas[i].nomeResponsavel) {
            alert("id da reserva: " + reservas[i].id)
            alert("hotel: " + hoteis[(reservas[i].idHotel) - 1].Nome)
        }
    }
}

//função para procurar oteis pela categoria
function ProcurandoHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].nome)
        }
    }
    return hoteisProcurados
}

//função para atualizar telefone do hotel
function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    alert("número de telefone atualizado!")
}

//fluxo de funcionamento
let continuar = true
do {
    let opcao = prompt("escolha uma opção: \n1 - cadastrar hotel \n2 - cadastrar reserva \n3 - procurar reserva pelo hotel" +
    "\n4 - procurar hotel pela reserva \n5 - procurar reserva pelo responsável \n6 - procurar hotéis pro categoria" +
    "\n7 - atualizar telefone de um hotel \n8 - encerrar o programa")

    switch (opcao) {
        case '1':
            cadastrarHotel()
            break;
        case '2':
            cadastrarReserva()
            break;
        case '3':
            procurarReservasPeloHotel(prompt("digite o id do hotel:"))
            break;
        case '4':
            procurarHotelPelaReserva(prompt("digite o id da reserva:"))
            break;
        case '5':
            ProcurarReservaPeloNome(prompt("Informe o nome do responsável pela reserva:"))
            break;
        case '6':
            let hoteisProcurados = ProcurandoHotelPelaCategoria(parseInt(prompt("informe a categoria que deseja procurar:")))
            alert(hoteisProcurados)
            break;
        case '7':
            let idHotel = parseInt(prompt("digite o id do hotel que deseja atualizar"))
            let telefone = prompt("digite o novo número de telefone")
            AtualizarTelefone(idHotel, telefone)
            break;
        case '8':
            alert("programa encerrado")
            continuar = false
            break;
        default:
            alert("opção inválida")
            break
    }
} while (continuar)