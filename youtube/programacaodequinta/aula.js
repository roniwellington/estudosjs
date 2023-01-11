//Array = sequência de itens......IDENTIFICAR: 


// let cestaDeNumeros = [1, -1, 2, -2, 3, -3];
// let numerosPositivos = [];
// let numerosNegativos = [];

// for (let cep = 0; cep <= cestaDeNumeros.length; cep++){

//     if(cestaDeNumeros[cep] > 0){
//         numerosPositivos.push(cestaDeNumeros[cep]);
//     } else if ( cestaDeNumeros[cep] < 0){
//         numerosNegativos.push(cestaDeNumeros[cep]);
//     } else {
//         continue;
//     }

// } 

// console.log('números positivos: ' +  numerosPositivos)
// console.log('números Negativos: ' +  numerosNegativos)


//  let numeroDaVez = 0;

//  if (numeroDaVez >= 1 && numeroDaVez <= 9){
//     console.log("O valor está na faixa permitida");
//  } else {
//     console.log("O valor está fora da faixa permitida")
//  }

// let anoDeNascimento = 2005;
// let anoAtual = 2022;
// let idade = anoAtual - anoDeNascimento;

// if(idade >= 16){
//     console.log("Já tem idade para votar.");
// }else {
//     console.log("Não tem idade para votar");
// };

// if(idade >= 18){
//     console.log("Já tem idade para emitir a Carteira de Habilitação")
// } else{
//     console.log("Ainda não tem  idade para tirar a habilitação");
// };


// let valorDaMulta = 4.00;
// let KgPorMulta = 50;

// let rendimentoDiario = 60;
// let valorFinalDaMulta = 0.00; 

// if(rendimentoDiario < 50){
//     console.log("Não precisa pagar nada, pois está abaixo de 50KG");
// }

// if ( rendimentoDiario >= 50){
//     valorFinalDaMulta += 4.00;
// }

// if(rendimentoDiario >= 100){
//     valorDaMulta += 4.00;
// }

// if (rendimentoDiario >= 150){
//     valorDaMulta += 4.00;
// }

// console.log("Valor da cobrança: " + valorFinalDaMulta)

for(let contagem = 1; contagem <= 100; contagem++){
    if (contagem % 10 === 0){
        console.log(contagem)
        console.log("Múltiplo de 10. ")
    }
}