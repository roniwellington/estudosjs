function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano')
    let res = document.querySelector('#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        let genero= ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', '../foto-bebe-m.png')
                //criança

            } else if (idade < 21){
                img.setAttribute('src', '../foto-jovem-m.png')
                //Joven

            } else if (idade < 50){
                img.setAttribute('src', '../foto-adulto-m.png')
                //Adulto

            } else {
                //idoso
                img.setAttribute('src', '../foto-idoso-m.png')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src', '../foto-bebe-f.png')
                //criança

            } else if (idade < 21){
                img.setAttribute('src', '../foto-jovem-f.png')
                //Joven

            } else if (idade < 50){
                img.setAttribute('src', '../foto-adulto-f.png')
                //Adulto

            } else {
                //idoso
                img.setAttribute('src', '../foto-idoso-f.png')
            }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}