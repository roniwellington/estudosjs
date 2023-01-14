// function parimpar(n){
//     if(n%2 == 0){
//         return 'Par!'
//     }else{
//         return 'ímpar!'
//     }
// }

// console.log(parimpar(12458))

// function soma(n1=0, n2=0){
//     return n1 + n2
// }

// console.log(soma(2,8))


// let v = function(x){
//     return x*2
// }
// console.log(v(5))


//recursividade
// function fatorial(n){
//     if(n == 1){
//         return 1
//     }else {
//         return n * fatorial(n-1)
//     }
//     // let fat = 1;
//     // for(let c = n; c > 1; c--){
//     //     fat *= c
//     // }
//     // return fat
// }

// console.log(fatorial(5))

//objeto

let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p;
}};
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)