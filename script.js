function mudar() {
  let texto = window.document.querySelector("div#text")
   let imagem = window.document.querySelector("img#img")
    
   let data = new Date()
   let hora = data.getHours()

    texto.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        imagem.src = "Manhã.png"
        window.document.body.style.background = "orange"
        
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        imagem.src = "Tarde.png"
        window.document.body.style.background = "red"

    } else {
        //BOA NOITE
        imagem.src = "Noite.png"
        window.document.body.style.background = "black"
        tt = document.querySelector("#título")
        tt.style.color = "white"
   


    }


}
mudar()
setInterval(mudar, 5000);