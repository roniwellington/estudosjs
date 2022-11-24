//declaração de função
// function minhaFuncao(param){
//     bloco de código
// }
// minhaFuncao("param")

//diferença principal ????

console.log(apresentar())

function apresentar(){
    return "olá"
}

//expressa de função

//diferença principal: HOISTING
//funções e var são "listadas" no topo arquivo
console.log(soma(1,1))//ReferenceError: Cannot access 'soma' before initialization
const soma = function(num1, num2){return num1 + num2}
// console.log(soma(1, 1))

