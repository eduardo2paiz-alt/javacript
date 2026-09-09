import { createInterface } from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese un dato: ', (dato) => {

  const datoConvertido = parseFloat(dato);

  if (isNaN(datoConvertido)) {
    console.log(`\nEl dato ingresado "${dato}" NO es un número`);
  } else {
    console.log(`\nEl dato ingresado "${dato}" SÍ es un número: ${datoConvertido}`);
  }

  rl.close();
});