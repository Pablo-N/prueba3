const prompt = require("prompt-sync")({ sigint: true });

// funciones

function sumar (n1,n2){
    return n1 + n2;
}

//console.log(sumar(2,54));

function restar (n1,n2){
    return n1 - n2;
}

function multiplicar (n1,n2){
    return n1 * n2;
}

function dividir (n1,n2){
    return n1 / n2;
}

function cuadradoDeUnnumero(n1){
    return n1*n1;
}

function promedioDeTresNumeros(n1,n2,n3){
    return (n1 +n2 +n3) /3 ;
}
function calcularPorcentaje(n1,n2){
return (n1*n2)/100;
}




console.log("-------------- Testeo de Operaciones / Calculadora --------------");

let primerNumero = 0;
let segundoNumero = 0;
primerNumero = prompt("Ingresa el primer número: ");
segundoNumero = prompt("Ingresa el segundo número : ");

n1 = parseInt(primerNumero);
n2 = parseInt(segundoNumero);

console.log("Total suma: " + sumar(n1,n2));
console.log("Total resta: " + restar(n1,n2));
console.log("Total multiplicación: " + multiplicar(n1,n2));
console.log("Total division: " + dividir(n1,n2));
console.log("Cuadrado de el primer numero: " + cuadradoDeUnnumero(n1));
console.log("promedio de 3 numeros: " + promedioDeTresNumeros(n1,n2,7));
console.log("Porcentaje: " + calcularPorcentaje(n1,n2));
