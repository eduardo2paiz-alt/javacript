// 4- Total a pagar por un producto
const readline = require('readline-sync');

let nombre = readline.question('Ingrese el nombre del producto: ');
let precioUnitario = parseFloat(readline.question('Ingrese el precio unitario: '));
let cantidad = parseInt(readline.question('Ingrese la cantidad comprada: '));
let total = precioUnitario * cantidad;
console.log('Producto: ' + nombre);
console.log('Total a pagar: $' + total);