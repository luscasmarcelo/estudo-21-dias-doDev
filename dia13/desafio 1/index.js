class Computador {//criando classe 
    tipo
    processador
    video 
    armazenamento
    memoriaRam
    ssd

    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {//define oq o objeto deve ter
        this.tipo = tipo
        this.processador = processador
        this.video = video
        this.armazenamento = armazenamento
        this.memoriaRam = memoriaRam
        this.ssd = ssd
    }

    exibirInfo() {//função da classe - exibir em tela o objeto
        console.log("Configuração da máquina:")
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Processador: ${this.processador}`)
        console.log(`Vídeo: ${this.video}`)
        console.log(`Armazenamento: ${this.armazenamento}`)
        console.log(`Memória: ${this.memoriaRam}`)
        console.log(`SSD: ${this.ssd}`)
    }
}

//criando um novo objeto a partir da classe "Computador"
const meuPc = new Computador("notebook", "i3", "Intel Hd graphics", "250gb", "16gb", true)
meuPc.exibirInfo()