function verificar() {
    var data = new Date()
    var ano = data.getHours()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-homem250p.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovem-homem250p.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adulto-homem250p.png')
            } else if {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-homem250p.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                // Criança
            } else if (idade < 21) {
                // Jovem
            } else if (idade < 50) {
                // Adulto
            } else if {
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
        
}