class Carro {
    nome
    potencia
    velocidadeMaxima
    aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.nome = ""
        this.potencia = 0
        this.velocidadeMaxima = 0
        this.aceleracao = 0
    }

    preencherDados(){
        this.nome = prompt("Insira o modelo do carro: ")
        this.potencia = parseFloat(prompt("Insira a potência do carro:"))
        this.velocidadeMaxima = parseFloat(prompt("Insira a velocidade máxima:"))
        this.aceleracao = parseFloat(prompt("Insira a aceleração do carro"))
    }

    calcularTempoMedio(distancia) {
        let resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
        return resultado;
    }
}

const meuCarro = new Carro
meuCarro.preencherDados()

const distanciaPercorrer = parseFloat(prompt("Insira a distâcia que irá percorrer:"))
const tempoMedio = meuCarro.calcularTempoMedio(distanciaPercorrer)

console.log(`O tempo médio para percorrer ${distanciaPercorrer} metros é de ${tempoMedio.toFixed(2)}`)