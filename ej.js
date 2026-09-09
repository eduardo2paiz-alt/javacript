// Importamos el módulo readline para poder solicitar datos al usuario desde consola
import readline from 'node:readline';

// Creamos la interfaz de lectura/escritura (entrada = teclado, salida = consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitamos el nombre completo al usuario
rl.question('Ingrese su nombre completo: ', (nombreCompleto) => {

  // Convertimos el nombre completo a mayúsculas
  const nombreMayusculas = nombreCompleto.toUpperCase();

  // Convertimos el nombre completo a minúsculas
  const nombreMinusculas = nombreCompleto.toLowerCase();

  console.log('Nombre en mayúsculas: ' + nombreMayusculas);
  console.log('Nombre en minúsculas: ' + nombreMinusculas);

  // Cerramos la interfaz de readline
  rl.close();
});