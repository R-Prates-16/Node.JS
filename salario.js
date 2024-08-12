prompt = require("prompt-sync")();

let valor_da_hora = parseInt(prompt("Digite o valor da hora"));
let horas_trabalhadas = parseFloat(prompt("Digite a quantas horas você trabalhou"));

let semanal = valor_da_hora * horas_trabalhadas
let mensal = valor_da_hora * horas_trabalhadas * 4

console.log( " O seu salário semanal é de " + semanal + " o seu salário mensal é de " + mensal);