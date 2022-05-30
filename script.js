function imagens() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora < 12){
        img.src = 'diacirculo.png'
        document.body.style.background = '#FDD482'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'tardecirculo.png'
        document.body.style.background = '#FCBA27'
    } else{
        img.src = 'noitecirculo.png'
        document.body.style.background = '#012840'
    }
    
}

