// Sumar:
function sumar (x, y){
    //return x + y;
//}
//let x = 10;
//let y = 4;
//console.log('resultadoSuma' + ' ' + sumar (x, y));

//Resta:
let restar = (x, y) => x - y;
//console.log('resultadoResta' + ' ' + restar (x, y));

//Multiplicar:
let multiplicar = (x, y) => x * y;
//console.log('resultadoMultiplicacion' + ' ' + multiplicar (x, y));

//Dividir:
function dividir (x, y){
    return x / y;
}
//console.log('resultadoDivision' + ' ' + (x, y));

//console.log(“-------------- Testeo de Operaciones / Calculadora --------------”)

const prompt = require("prompt-sync")({ sigint: true });

let numeroA
let numeroB

numeroA = prompt('IngreseNumeroA');
numeroB = prompt('IngreseNumeroB');

console.log(sumar(numeroA, numeroB));
console.log(restar(numeroA, numeroB));