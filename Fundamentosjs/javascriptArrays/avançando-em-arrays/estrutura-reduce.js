const numeros = [43, 50, 65, 12]
//const soma = numeros.reduce((acc, atual) => atual + acc, 0)
// console.log(soma)

// const soma = numeros.reduce(function(acc, atual){
//     return atual + acc
// }, 0)



function operacaoNumerica(acc, atual){
    return atual + acc
}

const soma = numeros.reduce(operacaoNumerica, 0);
console.log(soma)