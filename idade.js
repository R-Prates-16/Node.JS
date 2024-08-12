prompt = require("prompt-sync")()

let ano_de_nascimento = parseInt(prompt("Digite o ano que você nasceu"));
let anoatual = new Date().getFullYear()

let idade_atual =  anoatual - ano_de_nascimento

console.log("Você tem " + idade_atual + " anos")
