// Manipulando conteúdo
// textContent

const element = document.querySelector('h1');

element.textContent += " Olá Devs!";

element.innerText = "Olá Devs!"

element.innerHTML = "Meu Blog <small>!!!</small>"
console.log(element);


const elementUm = document.querySelector('input');

console.log(elementUm.value)
elementUm.value = "Outro valor"

// Manipulando elementos
//Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('class'));
header.removeAttribute('id')

header.setAttribute('class', 'bg header')


//Alterando estilos

//onst elementEstilo = document.querySelector('body')

///elementEstilo.style.backgroundColor = "#2f5bd3"

const elementTres = document.querySelector('body')
elementTres.classList.add('active', 'azul')
console.log(elementTres.classList)
element.classList.remove('active')
element.classList.toggle('active')

//Navegando pelos elementos
//parentNode parentElement

const elementQuarto = document.querySelector('body')

console.log(element.parentElement)