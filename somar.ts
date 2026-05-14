const tela = require('readline-sync')

const valor1:number = tela.question('Informe o primeiro valor:')
const valor2:number = tela.question('Informe o segundo valor:')

const resultado:number = valor1 + valor2

console.log("A soma do "+valor1+" + "+valor2+" = "+resultado)
