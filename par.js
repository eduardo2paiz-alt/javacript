const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del evento: ", (evento) => {
    console.log(`EN MAYUSCULAS: ${evento.toUpperCase()}`);
    rl.close();
});