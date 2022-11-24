//parâmetros de função
                //2    //2
function soma(numero1, numero2){
    return numero1 + numero2;
}

// console.log(soma(2, 2))
// console.log(soma(5, 5))

//parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("juliana", 40))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2
}

console.log(multiplica(soma(4,5)))