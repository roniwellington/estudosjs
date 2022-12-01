//for tradicional

// const listas =[1,2,3,4,5]

// for (let i = 0; i < listas.length; i++) {
//      console.log(listas[i]);
    
// }

// for (let i = 0, j = 0; i < listas.length; i++, j++) {
//     console.log(listas[i] + j)
    
// }


//for...of

// const lista = [1,2,3,4,5];
// let soma = 0;
// for(let elemento of lista){
//     soma += elemento;
// }

// console.log(soma)


//forEach()


const lista = [1,2,3,4,5]
let soma = 0;

// lista.forEach(numero => soma += numero);
// console.log(soma)

lista.forEach(numero => {soma += numero})