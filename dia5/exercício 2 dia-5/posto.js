let valor 
let quantidade
let opcao = parseInt(prompt("Bem-vindo! escolha uma opção: " + "\n1 - Abastecer gasolina \n2 - Abastecer álcool \n3 - Calibrar os pneus"))

switch (opcao) {
    case 1:
        valor = parseInt((prompt("Digite o valor desejado para abastecer: ")))
        quantidade = valor / 5
        alert("Foram abastecidos "+quantidade+ "L de gasolina!")
        break;
    case 2:
        valor = parseInt(prompt("Digite o valor desejado para abastecer: "))
        quantidade = valor / 3
        alert("Foram abastecidos "+quantidade+ "L de álcool")
        break;
    default:
        alert("Pneus calibrados com sucesso!")
        break;
}