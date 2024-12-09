const prompt = require("prompt-sync")()

lista = []
let soma = 0

for(let i = 1; i <= 10; i++){
    let num = Number(prompt('Digite um numero para armazenar no Array: '))
    lista.push(num)
    soma += num
    console.log(`Numero inserido: ${num} / lista ${lista} / Soma ${soma}`)
}

