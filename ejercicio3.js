import { createInterface } from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la longitud en metros: ', (metros) => {

  const metrosNum = Number(metros);
  const centimetros = metrosNum * 100;

  console.log(`\n${metrosNum} metros equivalen a ${centimetros} centímetros`);

  rl.close();
});