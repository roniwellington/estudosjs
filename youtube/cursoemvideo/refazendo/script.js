function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    msg.innerHTML = `Agora são ${hora} : ${minutos} : ${segundos}`

    if(hora >= 0 && hora < 12){

        img.src = '../amanhecer.jpg'
        document.body.style.background = '#e2cd9f'

    } else if (hora < 18){
        img.src = '../entardecer.jpg'
        document.body.style.background = 'rgb(107, 107, 241)'
    } else {
        img.src = '../anoitecer.jpg'
        document.body.style.background = '#515154'
    }
}


