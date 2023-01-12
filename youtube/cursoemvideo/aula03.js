
// function calcular(){
//     let txtv = document.querySelector('#txtvel');
//     let res = document.querySelector('#res');
//     let vel = Number(txtv.value);
//     res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h</p>`

//     if(vel > 60){
//         res.innerHTML +=`<p>Você está Multado por excesso de velocidade</p>`
//     }

//     res.innerHTML += `<p>Dirija sempre com cinto de segunraça!</p>`

// }

// let idade = 65;
// if(idade < 16){
//     console.log('Não vota');
// } else if (idade < 18 || idade > 65){
//     console.log('Voto Opcional');
// } else {
//     console.log('Voto obrigatório');
// };

// let Agora = new Date()
// let hora = Agora.getHours()

// // let hora = 13;
// console.log(`Agora são exatamente ${hora} horas.`)

// if(hora < 12){
//     console.log('Bom dia!')
// } else if(hora <= 18){
//     console.log('Boa Tarde!')
// } else {
//     console.log('Boa Noite')
// }

let agora = new Date();
let diaSem = agora.getDay();


console.log(diaSem);

switch (diaSem) {
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda');
        break;

    case 2:
        console.log('Terça');
        break;

    case 3:
        console.log(' Quarta');
        break;

    case 4:
        console.log(' Quinta');
        break;

    case 5:
        console.log(' Sexta');
        break;

    case 6:
        console.log('Sabado');
        break;
    default:
        console.log('[ERRO] dia invalido')
}