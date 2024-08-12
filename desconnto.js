prompt = require("prompt-sync")()
 
let nome = prompt("Nome do produto");
let valor = parseFloat(prompt("Digite o valor do produto"));
let quantidade = parseFloat(prompt("Digite a quantidade"));
let quantidade_de_desconto = parseFloat(prompt("Digite o desconto"));

let resultado = valor * quantidade;
let resultado2 = resultado - resultado * (quantidade_de_desconto/100);

console.log("o preço com o desconto é " + resultado2 + " O nome do produto é " + nome + " o preço antes era " + valor );
