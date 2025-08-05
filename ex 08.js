
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora}hrs `)
if (agora > 12){
    console.log( "Bom dia!")
}
else if (agora <18.00 && agora >12){
    console.log( "Boa tarde!")
}
else {
    console.log("Boa noite!")
}