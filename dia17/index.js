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
    let telefone = parseInt(prompt("Informe o telefone do hoel:"))
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