let copo

let p1 = document.getElementsByTagName('p')[1]

document.write(p1.innerHTML)

// document.write('Está escrito assim: ' + p1.innerText)

alert(p1.innerText)

// let d = document.getElementById('msg')
// d.style.background= 'green'
// d.style.padding= '15px'
// d.style.margin= '15px'
// d.innerText = 'Estou aguardando...'

let d = document.querySelector('#msg')

d.style.background= 'green'
d.style.padding= '15px'
d.style.margin= '15px'
d.innerText = 'Estou aguardando...'


var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'rgb(46, 69, 112)'
}

function entrar(){
    a.innerText = 'Entrou!'
}
 function sair(){
    a.innerText = 'Saiu!'
 }


 function somar(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
 }