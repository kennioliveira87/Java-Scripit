function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas:`
    if (hora >= 0 && hora < 12) {
         //BOM DIA!
        img.src = 'imagens/manha250p.png'
        document.body.style.background = '#755f57'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde250p.png'
        document.body.style.background = '#bf8466'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite250p.png'
        document.body.style.background = '#182b39'
    }
}
