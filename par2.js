const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("ingrese el codigo (ej.VEN-2026-045):", (codigo)=>{
    const numero =  codigo.split(`-`)(0);
    console.log(`Departamento: ` + departamento );
    r1.close();


});