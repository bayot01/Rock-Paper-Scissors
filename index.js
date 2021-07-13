let playerOchko=0
let botOchko=0
for(let i=0; i<6; i++){
    let player=prompt("tosh,qaychi,qog'oz,tanlang").toLowerCase()
    let bot = ['tosh',"qog'oz",'qaychi']
    botTanlovi=bot[Math.round(Math.random()*2)]
    
    if (player==botTanlovi){
        console.log(player)
        console.log(botTanlovi)
        alert('durrang')
    } else if(player=='tosh'&&botTanlovi=="qaychi"){
        console.log(player)
        console.log(botTanlovi)
        alert("player yutti")
        playerOchko++
        console.log(playerOchko)
    } else if(player=='tosh'&&botTanlovi=="qog'oz"){
        console.log(player)
        console.log(botTanlovi)
        alert("bot yutti")
        botOchko++
        console.log(botOchko)
    } else if(player=="qog'oz"&&botTanlovi=="tosh"){
        console.log(player)
        console.log(botTanlovi)
        alert("player yutti")
        playerOchko++
        console.log(playerOchko)
    } else if(player=="qog'oz"&&botTanlovi=="qaychi"){
        console.log(player)
        console.log(botTanlovi)
        alert("bot yutti")
        botOchko++
        console.log(botOchko)
    } else if(player=='qaychi'&&botTanlovi=='tosh'){
        console.log(player)
        console.log(botTanlovi)
        alert("bot yutti")
        botOchko++
        console.log(botOchko)
    } else if(player=='qaychi'&&botTanlovi=="qog'oz"){
        console.log(player)
        console.log(botTanlovi)
        alert('player yutti')
        playerOchko++
        console.log(playerOchko)
    } else {
        alert("Faqat tosh qaychi qog'oz so'zlarini kiriting")
    }
}
// if (player==botTanlovi){
//     console.log(player)
//     console.log(botTanlovi)
//     alert('durrang')
// } else if(player=='tosh'&&botTanlovi=="qaychi"){
//     console.log(player)
//     console.log(botTanlovi)
//     alert("player yutti")
// } else if(player=='tosh'&&botTanlovi=="qog'oz"){
//     console.log(player)
//     console.log(botTanlovi)
//     alert("bot yutti")
// } else if(player=="qog'oz"&&botTanlovi=="tosh"){
//     console.log(player)
//     console.log(botTanlovi)
//     alert("player yutti")
// } else if(player=="qog'oz"&&botTanlovi=="qaychi"){
//     console.log(player)
//     console.log(botTanlovi)
//     alert("bot yutti")
// } else if(player=='qaychi'&&botTanlovi=='tosh'){
//     console.log(player)
//     console.log(botTanlovi)
//     alert("bot yutti")
// } else if(player=='qaychi'&&botTanlovi=="qog'oz"){
//     console.log(player)
//     console.log(botTanlovi)
//     alert('player yutti')
// } else {
//     alert("Faqat tosh qaychi qog'oz so'zlarini kiriting")
// }


