import readline = require('readline-sync')
console.clear()

let loop:boolean = true
while(loop) { 

	const nomePessoa:string = readline.question("Informe seu nome: ")
	const peso:number = Number(readline.question("Informe seu peso: "))
	const altura:number = Number(readline.question("Informe sua altura: "))
	let situacao:string = ""

	const imc = peso / altura**2


	if (imc < 18.5){
		situacao = "Baixo peso"
	} else if (imc >= 18.5 && imc < 24.9){
		situacao = "Peso normal"
	} else if (imc >= 25.0 && imc < 29.9){
		situacao = "Exesso de peso"
	} else if (imc >= 30.0 && imc < 34.9){
		situacao = "Obesidade de Classe 1"
	} else if (imc >= 35.0 && imc < 39.9){
		situacao = "Obesidade de Classe 2"
	} else if (imc >= 40)
		situacao = "Obesidade de Classe 3"

	console.log(`Olá, ${nomePessoa}! sua altura é de ${altura}m, e seu peso é de ${peso}kg, logo seu IMC é de ${imc.toFixed(2)} você tem ${situacao}`)

const continuar = readline.question("Deseja continuar? S - Sim | N - Não")

if (continuar.toUpperCase() === 'N'){
loop = false
 }
}



