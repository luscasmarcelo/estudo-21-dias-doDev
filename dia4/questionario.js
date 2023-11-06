const temFome = prompt("Você está com fome? (sim/não)");
const temDinheiro = prompt("Você tem dinheiro? (sim/não)");
const restauranteAberto = prompt("O restaurante está aberto? (sim/não)");

if(temFome === "não" || temDinheiro === "não") {
    console.log("Hoje a janta será em casa!")
}else if(temFome === "sim" && temDinheiro === "sim" && restauranteAberto === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido!")
} else {
    console.log("Peça um delivery!")
}