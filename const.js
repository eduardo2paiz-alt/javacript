const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese el numero de factura (FAC-45872): ", (factura)=>{
    const numero = factura.split(`-`)[1];
    console.log(`parte numerica:` + numero);
    r1.close();
});