prompt = require("prompt-sync")()
 
let valor = parseFloat(prompt("Digite o valor do produto"));
let parcelas = parseFloat(prompt("Digite a quantidade de parcelas"));

let quantidade_de_parcelas = valor / parcelas
let juros = valor * 5 / 100 
let pp = valor / parcelas + juros

console.log( " o valor da compra é " + valor + " a quantidade de parcela é " + parcelas + " o valor do juros é " + juros + " o valor de cada parecla ficou " + pp)