function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
   // var hora = 18
    
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/pexels-ave-calvar-martinez-3030459.jpg'
        document.body.style.background = '#e2cd9f'
        
        
    }else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/pexels-george-desipris-858241.jpg'
        document.body.style.background = '#b9846f'
    
        
    
    }else {
        //boa noite
        img.src = 'imagens/pexels-pixabay-355465.jpg'
        document.body.style.background = '#515154'
    
        
    }
    
    }