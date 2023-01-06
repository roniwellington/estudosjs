let n2 = prompt('Digite um Número');
n2 =parseFloat(n2)

escreve(n2);

function iniciarCalculo(simbolo){
    let n1 = document.querySelector('#output').textContent;
    n1 = parseFloat(n1);

    let n2 = prompt('Digite outro número')
    n2 = parseFloat(n2)

    let msg = calcular(simbolo, n1, n2);

    escreve(msg);
}

function escreve(mensagem){
    let output = document.querySelector('#output');
    output.innerHTML = mensagem;
}

function calcular(simbolo, n1, n2){
    if(simbolo !== '+' && simbolo !== '-' && simbolo !== '*' && simbolo !== '/'){
        alert('Digite um simbolo valido')
        return 0;
    }

    if ( isNaN(n1) || isNaN(n2)){
        alert('chama passando somente numeros')
        return 0;
    }

    let numeroCalculado = null;

    switch(simbolo){
        case '+':
            numeroCalculado = n1 + n2;
            break;
        case '-':
            numeroCalculado = n1 - n2;
            break;
        case '*':
            numeroCalculado = n1 * n2;
            break;
        case '/':
            numeroCalculado = n1 / n2;
        
    }

    return numeroCalculado;

}