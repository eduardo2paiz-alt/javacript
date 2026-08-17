import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la base del rectángulo: ", function (baseIngresada) {
    rl.question("Ingrese la altura del rectángulo: ", function (alturaIngresada) {

        const base = Number(baseIngresada);
        const altura = Number(alturaIngresada);

        const area = base * altura;

        console.log(`El área del rectángulo es: ${area}`);

        rl.close();
    });
});