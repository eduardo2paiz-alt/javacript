// 3- Horas a minutos
const readline = require('readline-sync');

let horas = parseFloat(readline.question('Ingrese la cantidad de horas: '));
let minutos = horas * 60;
console.log(horas + ' horas equivalen a ' + minutos + ' minutos');