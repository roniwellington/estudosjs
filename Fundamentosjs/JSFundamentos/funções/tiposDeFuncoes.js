//função sem retorno e sem parâmetro
// function cumprimentar(){
//     console.log('oi gente')
// }

// cumprimentar()

//função sem retorno, com parâmetro

// function cumprimentaPessoa(pessoa){
//     console.log(`Oi, ${pessoa}`)
// }

// cumprimentaPessoa('Helena')


function cumprimentar(){
    return 'Oi gente!'
}

function cumprimentaPessoa(nomePessoa){
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa('Paula')

function operacaoMatematica(numero1, numero2, numero3){
    return numero1 + numero2  + numero3
}

console.log(operacaoMatematica(15, 30, 45))