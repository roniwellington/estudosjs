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


function verificar(){
    let data = new Date();
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criaça
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 20){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criaça
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 20){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}