let num1 = parseInt(prompt("digite o primeiro valor:"))
let num2 = parseInt(prompt("digite o segundo valor:"))
let opcao = parseInt(prompt("escolha a operação que deseja realizar:" + "\n1  = +; \n2 = -; \n3 = *; \n4 = /"))

switch (opcao) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break;
    case 4: 
        console.log(num1 + " / " + num2 + " = " + (num1 / num2))
        break;
}

alert("O resultado é: " + (num1 + num2))
alert("O resultado é: " + (num1 - num2))
alert("O resultado é: " + (num1 * num2))
alert("O resultado é: " + (num1 / num2))
