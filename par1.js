const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("ingrese el correo electronico: ", (correo)=>{
    console.log(`en minusculas: ` + correo.toLowecase());
    r1.close();

})

