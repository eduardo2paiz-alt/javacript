import { createInterface } from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio del producto: ', (precio) => {
  rl.question('Ingrese el porcentaje de descuento: ', (porcentajeDescuento) => {

    const precioNum = Number(precio);
    const porcentajeDescuentoNum = Number(porcentajeDescuento);

    const valorDescuento = precioNum * (porcentajeDescuentoNum / 100);
    const precioFinal = precioNum - valorDescuento;

    console.log(`\nValor del descuento: $${valorDescuento}`);
    console.log(`Precio final a pagar: $${precioFinal}`);

    rl.close();
  });
});