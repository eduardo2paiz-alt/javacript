import { createInterface } from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio unitario del producto: ', (precioUnitario) => {
  rl.question('Ingrese la cantidad que desea comprar: ', (cantidad) => {

    const precioUnitarioNum = Number(precioUnitario);
    const cantidadNum = Number(cantidad);

    const totalPagar = precioUnitarioNum * cantidadNum;

    console.log(`\nTotal a pagar: $${totalPagar}`);

    rl.close();
  });
});