function carregar(){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours()
    let minutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}: ${minutes} horas`;

    if(hora >= 0 && hora < 12){
        //bom dia!
        img.src = 'amanhecer.jpg'
        document.body.style.backgroundImage = 'url(fundo-manha.jpg)'
    } else if (hora >= 12 && hora < 18){
        //boa tarde!
        img.src = 'entardecer.jpg'
        document.body.style.backgroundImage = 'url(fundo-tarde.jpg)'
    } else {
        //boa noite
        img.src = 'anoitecer.jpg'
        document.body.style.backgroundImage = 'url(fundo-noite.jpg)'
    }
}
