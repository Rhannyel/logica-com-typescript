const tela = require('readline-sync')
const nome:string = tela.question('Qual é o seu nome? ')
const anoNasc:number = tela.question ('Qual o seu ano de nascimento? ')
const idade = 2026 - anoNasc
console.log ("Olá, " + nome + ", a sua idade é "+ idade + " anos.")
