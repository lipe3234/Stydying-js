var nome = window.prompt("Qual é o seu nome?")
var senhacorreta = "88alohomora"
var senha = window.prompt("Antes de entrar, digite a senha")

if (senha === senhacorreta){
    window.alert(`Seja muito bem vindo ${nome}!`);
}
else{
    window.alert("A senha está errada, tente novamente!");
    const link = document.createElement('https://www.google.com/'); 
}

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são exatamente ${hora}hrs.`

    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = "C:\Users\Phillipe\Pictures\Fotos\manha.jpg"
        document.body.style.background = ''
    } else if (hora >=12 && hora <= 18){
        // boa tarde
        img.src = "C:\Users\Phillipe\Pictures\Fotos\tarde.jpg"
        document.body.style.background = ''
    } else {
        // boa noite
        img.src = "C:\Users\Phillipe\Pictures\Fotos\noite.jpg"
        document.body.style.background = ''
    }
}