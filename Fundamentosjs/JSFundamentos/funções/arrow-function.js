//forma classica de função
function apresentar(nome){
    return`meu nome é ${nome}`
}


//Arrow function
// const aprsentarArrow = nome => `meu nome é ${nome}`;
// const soma = (num1, num2) => num1 + num2;

//Arrow function com +  de 1 linha de instrução
// não confundir com o operador de maior igual(>=)

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10|| num2 > 10){
        return"somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
} 

console.log(somaNumerosPequenos(2,5))

//HOISTING: arrow function se comporta como expressão