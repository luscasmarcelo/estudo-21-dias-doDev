class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = nome
        this.potencia = potencia
        this.velocidadeMaxima = velocidadeMaxima
        this.aceleracao = aceleracao
    }

    calcularTempoMedio(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado;
    }
}

class Corrida {
    nome
    tipo
    distancia
    participantes
    vencedor

    constructor(nome, tipo, distancia) {
        this.nome = nome
        this.tipo = tipo
        this.distancia = distancia
        this.participantes = []
        this.vencedor = ""
    }

    definirVencedor() {
        let menorTempo = this.participantes[0].calcularTempoMedio(this.distancia)
        let vencedor = this.participantes[0]

        for (let index = 1; index < this.participantes.length; index++) {
            let tempo = this.participantes[index].calcularTempoMedio(this.distancia)
            if (tempo < menorTempo) {
                menorTempo = tempo
                vencedor = this.participantes[index]
            }
        }
        return this.vencedor = vencedor
    }
    exibirVencedor() {
        alert("O vencedor da corrida é: " + this.vencedor.nome)
    }
}

let grandePremio = new Corrida("Interlagos", "DTM", 5000)

grandePremio.participantes[0] = new Carro("Corolla", 177, 200, 10)
grandePremio.participantes[1] = new Carro("Civic", 143, 200, 10.5)
grandePremio.participantes[2] = new Carro("Jetta", 231, 200, 7.3)
grandePremio.participantes[3] = new Carro("Focus", 280, 200, 6.8)
grandePremio.participantes[4] = new Carro("Cruze", 153, 200, 8.9)

grandePremio.definirVencedor()
grandePremio.exibirVencedor