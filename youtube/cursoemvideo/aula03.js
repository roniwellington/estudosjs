
function calcular(){
    let txtv = document.querySelector('#txtvel');
    let res = document.querySelector('#res');
    let vel = Number(txtv.value);
    res.innerHTML = `<p>Sua velocidade atual é de ${vel}Km/h</p>`

    if(vel > 60){
        res.innerHTML +=`<p>Você está Multado por excesso de velocidade</p>`
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segunraça!</p>`
    
}