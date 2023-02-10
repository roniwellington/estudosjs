//Funções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado){
    console.log(dado())
}

// imprimirDado(1)
// imprimirDado('texto')
// imprimirDado(true)
// imprimirDado({nome: 'João'})

imprimirDado(function (){
    return 'Olá mundo'
})