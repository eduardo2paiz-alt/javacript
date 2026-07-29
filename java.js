// npm install readline-sync
const readline = require('readline-sync');

// 1- Promedio de tres notas
let nota1 = parseFloat(readline.question('Ingrese la primera nota: '));
let nota2 = parseFloat(readline.question('Ingrese la segunda nota: '));
let nota3 = parseFloat(readline.question('Ingrese la tercera nota: '));
let promedio = (nota1 + nota2 + nota3) / 3;
console.log('El promedio del estudiante es: ' + promedio);