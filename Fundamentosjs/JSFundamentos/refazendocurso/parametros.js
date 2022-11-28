//parâmetros de função

              //1       //2

// console.log(soma(2,5))

//parâmetros x argumentos

//ordem dos parâmetros

// function nomeIdade(nome, idade){
//     return `meu nome é ${nome} minha idade é ${idade}`
// }
// console.log(nomeIdade('Betemagor', 34))

// function soma(numeroUm, numeroDois){
//     return numeroUm + numeroDois
// }


// function multiplica(numero1, numero2){
//     return numero1 * numero2;
// }

// console.log(soma(4, 5), soma(3, 3))

function cumprimentar(){
    return 'Oi gente!'
}


function cumprimentaPessoa(nomePessoa){
    console.log(`${cumprimentar()}Meu nome é ${nomePessoa}!`)
}

cumprimentaPessoa('Helena')


function operacaoMatematica(numero1, numero2, numero3){
    return numero1 + numero2 + numero3
}

console.log(operacaoMatematica(15,30,45))
