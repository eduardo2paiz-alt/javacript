import readline from "node:readline";

const fiesta = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

fiesta.question("ingrese el nombre del fiestero: ", function (nombref) {
  fiesta.question("ingrese el costo de la decoracion: ", function (costo) {
    costo = parseFloat(costo);

    // CORREGIDO: se cambió 'cost' por 'costo'
    if (isNaN(costo) || costo < 0) {
      console.log("ingrese el valor numerico positivo");
      fiesta.close();
      return;
    }

    fiesta.question("ingrese el costo del pastel: ", function (costop) {
      costop = parseFloat(costop);
      if (isNaN(costop) || costop < 0) {
        console.log("ingrese un valor numerico positivo");
        fiesta.close();
        return;
      }

      fiesta.question("ingrese el valor de la degustacion: ", function (comida) {
        comida = parseFloat(comida);
        if (isNaN(comida) || comida < 0) {
          console.log("ingrese el numero positivo");
          fiesta.close(); // CORREGIDO: se agregaron los paréntesis ()
          return;
        }

        fiesta.question("ingrese costo de entretenimiento: ", function (costoe) {
          costoe = parseFloat(costoe);
          if (isNaN(costoe) || costoe < 0) {
            console.log("ingrese un valor numerico");
            fiesta.close(); // CORREGIDO: se agregaron los paréntesis ()
            return;
          }

          let totalPagar = costo + costoe + costop + comida;
          
          console.log(`--- fiesta de: ${nombref} ---`);
          console.log(`costo total de la celebracion: ${totalPagar}`);
          console.log(`aporte yo: ${totalPagar/2}`)
          console.log(`aporte yo: ${totalPagar / 2}`)

          fiesta.close();
        });
      });
    });
  });
});