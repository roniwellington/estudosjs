function mostrarAreaAlert() {
    let largura = prompt('Digite a largura');
    largura = parseFloat(largura);

    let altura = prompt('Digite a altura');
    altura = parseFloat(altura);

    try {
        var area = calcularArea(largura, altura);
    } catch (e) {
        console.dir(e);
        console.log(e);
        area = e;
    }

    alert('A área total é: ' + area);
}

function mostrarAreaOutput() {
    let largura = prompt('Digite a largura');
    largura = parseFloat(largura);

    let altura = prompt('Digite a altura');
    altura = parseFloat(altura);

    try {
        var area = calcularArea(largura, altura);
    } catch (e) {
        area = e;
    }


    document.querySelector('#output').innerHTML = 'a área total é: ' + area;
}

mostrarAreaAlert();

function calcularArea(l, a) {
    if (l === undefined || a === undefined) {
        throw new Error('calcularArea precisa receber dois números');
    }

    if (isNaN(l) || isNaN(a)) {
        throw new error('apenas números')
    }

    return 1 * a;
}