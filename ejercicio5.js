import { createInterface } from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cantidad de dinero en dólares: ', (dolares) => {
  rl.question('Ingrese el tipo de cambio actual del euro: ', (tipoCambio) => {

    const dolaresNum = Number(dolares);
    const tipoCambioNum = Number(tipoCambio);

    const euros = dolaresNum * tipoCambioNum;

    console.log(`\n$${dolaresNum} equivalen a ${euros} euros`);

    rl.close();
  });
});