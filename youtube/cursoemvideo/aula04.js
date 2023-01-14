function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours()
    let minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}: ${minutes} horas`;

    if (hora >= 0 && hora < 12) {
        //bom dia!
        img.src = 'amanhecer.jpg'
        document.body.style.backgroundImage = 'url(fundo-manha.jpg)'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde!
        img.src = 'entardecer.jpg'
        document.body.style.backgroundImage = 'url(fundo-tarde.jpg)'
    } else {
        //boa noite
        img.src = 'anoitecer.jpg'
        document.body.style.backgroundImage = 'url(fundo-noite.jpg)'
    }
}


function verificar() {
    let data = new Date();
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criaça
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criaça
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let rest = document.getElementById('rest')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        rest.innerHTML = 'Impossível contar'
        alert('[ERRO] Faltam dados!')
    } else {
        rest.innerHTML = 'Contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //Contagem crescente
            for (let c = 1; c <= f; c += p) {
                rest.innerHTML += `${c} \u{1F603}`
            }

        } else {//Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                rest.innerHTML += `${c}\u{1f603}`
            }
        }
        rest.innerHTML += `\u{1f3c1}`
    }
}

function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let resti = document.querySelector('#resti');
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
};

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
};

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} Adicionado`;
        lista.appendChild(item);
        resti.innerHTML = '';
    } else {
        alert('Valores inválidos ou já encontrado na lista.');
    }
    num.value = ''
    num.focus()
};

function finalizar() {
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!');

    } else {

        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos];
            if(valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / tot
        resti.innerHTML = '';
        resti.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        resti.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        resti.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        resti.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        resti.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
    }
};