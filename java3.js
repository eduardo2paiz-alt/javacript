import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", function (nombreProducto) {
    rl.question("Ingrese el precio unitario: ", function (precioIngresado) {
        rl.question("Ingrese la cantidad comprada: ", function (cantidadIngresada) {

            const precioUnitario = Number(precioIngresado);
            const cantidad = Number(cantidadIngresada);

            const total = precioUnitario * cantidad;

            console.log(`Producto: ${nombreProducto}`);
            console.log(`Total a pagar: $${total}`);

            rl.close();
        });
    });
});