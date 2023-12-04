let arrayUm = [13,20,10,22,24,20,27,17,19,14]
let arrayDois = [24,22,23,11,15,17,29,14,16,21]

function acharNumerosEmComum (arrayUm, arrayDois) {
    return arrayUm.filter(num => arrayDois.includes(num) && arrayUm.indexOf(num) === arrayUm.lastIndexOf(num))
}

let Resultado = acharNumerosEmComum(arrayUm, arrayDois)
console.log("Os números em comum etre os dois arrays são: " + Resultado)