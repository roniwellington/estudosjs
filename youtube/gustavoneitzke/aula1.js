function go (){
    let valueInput = document.getElementById('num').value;
    alert(valueInput)
}

function valor (){
    var a = document.getElementById('num-a').value;
    var b = document.getElementById('num-b').value;
    var c = b;
    var b = a;
    var a = c;
    console.log('Variável A: ' + a);
    console.log('Variável B: ' + b);
}

function somamedia(){
    var idade1 = parseInt(document.querySelector('#crianca1').value);
    var idade2 = parseInt(document.querySelector('#crianca2').value);
    var soma = (idade1 + idade2);
    var media = soma/2
    console.log('Soma: ' + soma)
    console.log('A media é ' + media)
}

function calculo(){
    var temp = document.querySelector('#temperatura').value;
    var result = (temp * 1.8) + 32;
    alert('Fahrenheit: ' + result);
}