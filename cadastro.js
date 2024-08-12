prompt = require("prompt-sync")()

let nome = prompt("Digite o nome do produto");
let valor = parseFloat(prompt("Digite o valor"));
let quantidade = parseFloat(prompt("Digite a quantidade"));

let resultado = valor * quantidade;
let resultado_2 = resultado + resultado * 0.18;
 
console.log("O nome do produto é " + nome + " o valor unitário seria de " + valor + " você selecionou " + quantidade + " o desconto sobre a compra foi de 18% " + " o preço final ficará em " + resultado_2);