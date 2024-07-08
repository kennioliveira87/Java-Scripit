function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'imagens/manha250p.png'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'imagens/tarde250p.png'
    } else {
        // BOA NOITE!
        img.src = 'imagens/noite250p.png'
    }
}
