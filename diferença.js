prompt = require("prompt-sync")()

let num1 = parseFloat(prompt("Digite o primeiro valor"));
let num2 = parseFloat(prompt("Digite o segundo valor"));

let resultado= num1 - num2

if (num1 < num2) resultado = num2 - num1
console.log("o maior número é" + resultado)

