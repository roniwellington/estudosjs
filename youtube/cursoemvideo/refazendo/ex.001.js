function calcular(){
    let txtv = document.querySelector('#txtvel');
    let res = document.querySelector('#res');
    let vel = Number(txtv.value);
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}</strong>km/h</p>`

    if(vel > 60){
        res.innerHTML += `<p>Velocidade  acima do permitido, voce foi multado</p>`
    } 

    res.innerHTML += `<p>Dirija sempre usando cinto de segurança</p>`
}