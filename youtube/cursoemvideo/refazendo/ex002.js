function pais() {
    let nasci = document.querySelector('#nacionalidade');
    let rest = document.querySelector('#resp');
    let nacao = nasci.value;
    rest.innerHTML = `Seu país é ${nacao}`;
    let Brasil = 'Brasil'

    if (nacao == Brasil) {
        rest.innerHTML += `<p>É brasileiro</p>`
    } else {
        rest.innerHTML += `<p>Voce é estrangeiro</p>`
    }
}