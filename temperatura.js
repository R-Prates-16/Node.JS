prompt = require("prompt-sync")()

let celcius = parseFloat(prompt("Digite o primeiro valor"));

let resultado = celcius * 9 /5 + 32;
 
console.log("o temperatura é " + resultado);