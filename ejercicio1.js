import { createInterface } from 'node:readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el nombre del empleado: ', (nombreEmpleado) => {
  rl.question('Ingrese la cantidad de horas trabajadas durante la semana: ', (horasTrabajadas) => {
    rl.question('Ingrese el pago recibido por cada hora de trabajo: ', (pagoPorHora) => {

      const horasTrabajadasNum = Number(horasTrabajadas);
      const pagoPorHoraNum = Number(pagoPorHora);

      const salarioSemanal = horasTrabajadasNum * pagoPorHoraNum;

      console.log(`\nEmpleado: ${nombreEmpleado}`);
      console.log(`Horas trabajadas: ${horasTrabajadasNum}`);
      console.log(`Pago por hora: $${pagoPorHoraNum}`);
      console.log(`Salario semanal: $${salarioSemanal}`);

      rl.close();
    });
  });
});