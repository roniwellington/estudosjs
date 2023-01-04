//tabuada

// let numero = prompt('digite um numero');

// numero = parseFloat(numero);

// let indice = 1;
// //repita até que indice seja <= 1000

// while(indice <=1000){
//     document.write(numero + ' x ' + indice + ' = ' + (numero * indice) + '<br>');

    
//     if(indice % 10 === 0 && indice > 0 ){
//         document.write('<hr>')
//     }
    
//     indice = indice + 1;

// }

// document.write('saiu do loop')

// for (let i = 1; i <=1000; i++){
//     document.write(numero + ' x ' + i + ' = ' + (numero * i) + '<br>');
// }
// document.write('saiu do  loop')



let ano = 1004;

while(ano <= 2017){

    if( !(ano % 100 === 0) || (ano % 400 === 0)){
        document.write(ano + '<br>');
    } else { 
        document.write(ano + 'não é bissexto<br>')
    }
    // ano = ano + 4;
    ano += 4;
}
