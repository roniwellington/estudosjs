function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res')

//se o inicio tiver vazio    ou o fim tiver vazio       ou o passo estiver vazio(executa o bloco dentro do if)
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'

        let i = Number(ini.value)//pegando o valor dentro de ini e convertendo para numeros
        let f = Number(fim.value)
        let p = Number(passo.value)


        if(p <= 0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        //valor de inicio deve ser maior que o valor final
        if (i < f){
            //Contagem crescente
            //o contador vai começar no inicio e enquanto o contador for menor  ou igual ao fim, o contador vai receber ele mesmo mais o passo
            for(let c = 1; c <= f; c += p){
                res.innerHTML += `${c} \u{1f603}`
            }
        } else {//Contagem regressiva
            //começando no inicio, e enquanto c for maior igual a f o contador vai perder o passo
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}\u{1f603}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
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
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

let num = document.querySelector('#fnum');
let lista = document.querySelector('#flista');
let res = document.querySelector('#res');
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valores inválidos ou já encontrados na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores , temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados e ${media}.</p>`
    }
}