import { stdout } from "node:process";
import readline from "node:readline";

const fiesta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fiesta.question("ingrese el nombre del fiestero: ", function(nombref){
    fiesta.question("ingrese el costo de la decoracion: ", function(costo){
        costo = parseFloat(costo);

        if (isNaN(costo) || costo < 0){
            console.log("ingrese un numero positivo");
            fiesta.close();
            return;
        }

        fiesta.question("ingrese el costo del pastel: ", function(costop){
            costop = parseFloat(costop);
            if (isNaN(costop)|| costop < 0 ){
                console.log("ingrese un numero positivo");
                fiesta.close();
                return;
            }

            fiesta.question("ingrese el valor de la desgustacion: ", function(comida){
                comida = parseFloat(comida);
                if (isNaN(comida)|| comida < 0 ){
                    console.log("ingrese un numero positivo"); 
                    fiesta.close();
                    return;
                }
            fiesta.question("ingrese el costo del entretenimiento: ", function(costoe){
                costoe =parseFloat(costoe);
                if (isNaN(costoe)|| costoe < 0 ){
                    console.log("ingrese un numero positivo");
                    fiesta.close();
                    return;
                }

                let totalPagar = costo + costoe + comida +costop;
                console.log(`---fiesta de: ${nombref}---`);
                console.log(`---costo de celebracion: ${totalPagar}`);
                console.log(`---aporte yo: ${totalPagar / 2 }  `);

                fiesta.close();
            })
            });
        });
    });
});