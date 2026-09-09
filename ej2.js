// Importamos el módulo readline para poder solicitar datos al usuario desde consola
import readline from 'node:readline';

// Creamos la interfaz de lectura/escritura (entrada = teclado, salida = consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitamos el código de carrera al usuario (ej. U20260867)
rl.question('Ingrese el código de carrera (ej. U20260867): ', (codigoCarrera) => {

  // Extraemos los primeros 3 caracteres del código usando slice()
  const primerosTresCaracteres = codigoCarrera.slice(0, 3);

  console.log('Código ingresado: ' + codigoCarrera);
  console.log('Primeros 3 caracteres: ' + primerosTresCaracteres);

  // Cerramos la interfaz de readline
  rl.close();
});