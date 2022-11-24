const num = 10;

// if (num ===null){
//     console.log('numero não forencido')
// }

if(num !== null){
    console.log(`o número é ${num}`)
}

//Múltiplas condições
//operadores AND(&&) ou OR (||) 



if(num > 12 || !num){
    console.log('numero não válido');
}

const num1 = 11

if(num1 > 11 && num1 < 20){
    console.log('número válido')
}

//if...else

function verificaNumeros(numero){
    if(numero > 10) {
        return 'número maior que 10';
    } else {
        return 'número não é maior que 10';
    }
}


console.log(verificaNumeros(9))

// else if

const num2 = 31;

if(num2 >= 0 && num2 <= 10) {
    console.log('número entre zero e dez');

}else if (num2 > 10 && num2 <= 20){
    console.log('número entre dez e vinte')

}  else if (num2 > 20 && num2 <= 30) {
    console.log('número ente vinte e trinta')
} else {
    console.log('outro numero')
}