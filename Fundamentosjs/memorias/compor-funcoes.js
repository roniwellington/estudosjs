// const acesso = (nome) => {
//     return `${nome} logou com sucesso no sistema!`
// }

// const usuarioLogin = (nome) => {
//     let array = []
//     for(i = 0; i < 900000; i++){
//         array.push(i)
//     }

//     return acesso(nome)
// } 

// const diretoriaLogin = (nome) => {
//     let array = []
//     for( i= 0; i < 900000; i++){
//         array.push(i)
//     }

//     return acesso(nome)
// }

// console.log(usuarioLogin("Luke"))
// console.log(diretoriaLogin("Leia"))

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const autentica = (cargo) => {
    let array = []
    for (i = 0; i < cargo; i++) {
        array.push(i)
    }

    return true;
}

const login = (pessoa, autentica) => {
    if (pessoa.cargo === `funcionario`) {
        autentica(900000)
    } else if (pessoa.cargo === `diretoria`) {
        autentica(900000)
    }

    return acesso(pessoa.nome)
}



// console.log(login({cargo: `diretoria`, nome: `leia`}, autentica))

// const frase = "Mergulhando em tecnologia com Alura"
// console.log(frase)

// const num = 500
// console.log(num.toString())

// let nome = "Andre"
// let saudacoes = "Seja bem-vindo "

// console.log(saudacoes + nome)

let nome1 = "André"
let saudacoes = `Seja bem-vindo  ${nome1}`
console.log(saudacoes)

let frase = "Mergulhando em tecnologia."
console.log(frase.substring(0, 11))

let nome = "André";
let comunicacao = " Olá, sr. nomeusuario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";

console.log(comunicacao.replace("nomeusuario", nome))

let novaString = "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("JavaScript, ").concat("Python,").concat(" e c#."))

let linguagens = "JavaScript; Java; c#; php; python; Go; Vb;SQL; C; C++"
let arrayLinguagens = linguagens.split(";")
console.log(arrayLinguagens)