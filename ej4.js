// Importamos el módulo readline para poder solicitar datos al usuario desde consola
import readline from 'node:readline';

// Creamos la interfaz de lectura/escritura (entrada = teclado, salida = consola)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicitamos el nombre del estudiante
rl.question('Ingrese el nombre del estudiante: ', (nombreEstudiante) => {
  // Solicitamos el apellido del estudiante
  rl.question('Ingrese el apellido del estudiante: ', (apellidoEstudiante) => {
    // Solicitamos el año de ingreso
    rl.question('Ingrese el año de ingreso: ', (anioIngresoTexto) => {
      // Solicitamos la cuota mensual
      rl.question('Ingrese la cuota mensual: ', (cuotaMensualTexto) => {

        // Nombre y apellido en mayúsculas
        const nombreEstudianteMayusculas = nombreEstudiante.toUpperCase();
        const apellidoEstudianteMayusculas = apellidoEstudiante.toUpperCase();

        // Primeras 3 letras del apellido (ya en mayúsculas)
        const primerasTresLetrasApellido = apellidoEstudianteMayusculas.slice(0, 3);

        // Convertimos el año de ingreso (texto) a número y luego de nuevo a texto con toString()
        const anioIngreso = parseFloat(anioIngresoTexto);
        const anioIngresoComoCadena = anioIngreso.toString();

        // Extraemos los últimos 2 dígitos del año usando slice() con índice negativo
        const ultimosDosDigitosAnio = anioIngresoComoCadena.slice(-2);

        // Convertimos la cuota mensual a número y la formateamos con 2 decimales
        const cuotaMensual = parseFloat(cuotaMensualTexto);
        const cuotaFormateada = cuotaMensual.toFixed(2);

        console.log('Nombre en mayúsculas: ' + nombreEstudianteMayusculas);
        console.log('Apellido en mayúsculas: ' + apellidoEstudianteMayusculas);
        console.log('Primeras 3 letras del apellido: ' + primerasTresLetrasApellido);
        console.log('Año de ingreso (texto): ' + anioIngresoComoCadena);
        console.log('Últimos 2 dígitos del año: ' + ultimosDosDigitosAnio);
        console.log('Cuota mensual: $' + cuotaFormateada);

        // Cerramos la interfaz de readline
        rl.close();
      });
    });
  });
});