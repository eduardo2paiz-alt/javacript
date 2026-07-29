// Importamos el módulo readline
import readline from "node:readline";

// Creamos la interfaz
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos las tres notas
rl.question("Ingrese la primera nota: ", function (primeraNota) {
    rl.question("Ingrese la segunda nota: ", function (segundaNota) {
        rl.question("Ingrese la tercera nota: ", function (terceraNota) {

            // Convertimos las respuestas a número
            const nota1 = Number(primeraNota);
            const nota2 = Number(segundaNota);
            const nota3 = Number(terceraNota);

            // Calculamos el promedio
            const promedio = (nota1 + nota2 + nota3) / 3;

            console.log(`El promedio del estudiante es: ${promedio}`);

            rl.close();
        });
    });
});