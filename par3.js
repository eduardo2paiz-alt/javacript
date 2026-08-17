const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese el numero de referencia(6 digitos): ", (referencia)=>{
    const numero = Number(referencia);
    const texto = numero.toString();
    const primerotres = texto.slice(0,3);
    console.log(`numero de referencia:`+ texto);
    console.log(`primeros tres digitos`+ primerotres);
    rl.close();

});