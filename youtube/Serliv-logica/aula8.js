//funções

function mostrarTabuada(){
    //perguntar o numero para o usuario
    let n = prompt('Digite um numero');

    limparTabuada();
    
    //converter o numero
    n = parseFloat(n);

    //criar uma variavel que servira de indice
    var i = 1;

    //enquanto indice <= 1000
    //concatena na variavel mensagem
    while(i <= 1000){
        mensagem += n + ' x ' + i + ' = ' + (n * i)  + '<br>';
         i++;
    }

    output.innerHTML = mensagem;


    //mostra mensagem no output
}


function limparTabuada(){
    mensagem = '';
    output.innerHTML = mensagem;
}


let output = document.querySelector('#output');

let mensagem = '';
