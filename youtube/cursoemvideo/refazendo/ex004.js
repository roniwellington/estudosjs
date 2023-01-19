var agora = new Date()
let hora = agora.getHours();
console.log(`Agora são exatamente ${hora} horas`)
 if(hora < 5){
    console.log('Boa Madrugada')
 } else if (hora < 12){
    console.log('Boa dia')
 } else if (hora <= 18) {
    console.log('Boa tarde')
 } else if(hora <= 23){
    console.log('Boa noite')
 }