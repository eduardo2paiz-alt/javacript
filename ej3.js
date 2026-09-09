// Importamos el módulo readline para poder solicitar datos al usuario desde consola
import readline from 'node:readline';

// Creamos la interfaz de lectura/escritura (entrada = teclado, salida = consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitamos un código numérico de 8 dígitos al usuario
rl.question('Ingrese un código numérico de 8 dígitos: ', (codigoTexto) => {

  // Convertimos lo ingresado a número
  const codigoNumerico = parseFloat(codigoTexto);

  // Convertimos el número a una cadena de texto usando toString()
  const codigoComoCadena = codigoNumerico.toString();

  // Extraemos los primeros 4 dígitos usando slice()
  const primerosCuatroDigitos = codigoComoCadena.slice(0, 4);

  console.log('Código como texto: ' + codigoComoCadena);
  console.log('Primeros 4 dígitos: ' + primerosCuatroDigitos);

  // Cerramos la interfaz de readline
  rl.close();
});