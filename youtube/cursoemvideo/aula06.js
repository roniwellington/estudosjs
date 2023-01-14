// let num = [5, 8, 2, 9, 3];
// num.push(1)
// num[3] = 6;
// num.push(7)
// num.length
// num.sort()
// console.log(`Nosso vetor é o [ ${num} ]`);
// console.log(`Nosso vetor tem ${num.length} posições `);

let valores = [8, 1, 7, 4, 2, 9];
let pos = valores.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 1 está na posição ${pos}`)

}

// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

// }

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
