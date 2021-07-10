// let pleyer
// let bot
let player=prompt("tosh,qaychi,qog'oz,tanlang")
// pleyer= ['tosh',"qog'oz",'qaychi']
let bot = ['tosh',"qog'oz",'qaychi']
botTanlovi=bot[Math.round(Math.random()*2)]
if (player==botTanlovi){
    console.log(player)
    console.log(botTanlovi)
    alert('durrang')
} else if(player=='tosh' && botTanlovi=="qaychi"){
    console.log(player)
    console.log(botTanlovi)
    alert("player yutti")
} else if(player=='tosh'&&botTanlovi=="qog'oz"){
    console.log(player)
    console.log(botTanlovi)
    alert("bot yutti")
} else if(player=="qog'oz"&&botTanlovi=="tosh"){
    console.log(player)
    console.log(botTanlovi)
    alert("player yutti")
} else if(player=="qog'oz"&&botTanlovi=="qaychi"){
    console.log(player)
    console.log(botTanlovi)
    alert("bot yutti")
} else if(player=='qaychi'&&botTanlovi=='tosh'){
    console.log(player)
    console.log(botTanlovi)
    alert("bot yutti")
} else if(player=='qaychi'&&botTanlovi=="qog'oz"){
    console.log(player)
    console.log(botTanlovi)
    alert('player yutti')
}


