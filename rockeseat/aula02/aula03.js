//eventos

function print() {
    alert('print')
}

const input = document.querySelector('input')

input.onkeydown = function(){
    console.log('rodei')
}

const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', printDois)

function printDois(){
    console.log('print')
}