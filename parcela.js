prompt = require("prompt-sync")()
 
let valor = parseFloat(prompt("Digite o valor do produto"));
let parcelas = parseFloat(prompt("Digite a quantidade"));

let quantidade_de_parcelas = valor / parcelas

console.log( " o valor da compra é " + valor + " a quantidade de parcela é " + parcelas + " o valor de cada parecla ficou " + quantidade_de_parcelas)
