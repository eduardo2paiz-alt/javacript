// 2- Área de un rectángulo
const readline = require('readline-sync');

let base = parseFloat(readline.question('Ingrese la base: '));
let altura = parseFloat(readline.question('Ingrese la altura: '));
let area = base * altura;
console.log('El área del rectángulo es: ' + area);