let playerOchko = document.getElementById('player')
const rock = document.querySelector(".fa-hand-rock")
const paper = document.querySelector('.fa-hand-paper')
const scissors = document.querySelector('.fa-hand-scissors')
let botOchko = document.getElementById('compyuter')
let bot = ['rock', 'paper', 'scissors']
let status=document.querySelector('.status')

red = 0
green = 0

function rockCheck(){
  let botTanlovi = bot[Math.round(Math.random() * 2)]
  if (botTanlovi == 'rock') {
    console.log('rock')
    console.log(botTanlovi)
    console.log("durrang")
    status.textContent='durrang'
  }
  else if (botTanlovi == "scissors") {
    console.log('rock')
    console.log(botTanlovi)
    red++
    console.log('player yutti')
    playerOchko.textContent=red
    status.textContent='player yutti'
  }
  else if (botTanlovi == "paper") {
    console.log('rock')
    console.log(botTanlovi)
    green++
    console.log('bot yutti')
    botOchko.textContent=green
    status.textContent='bot yutti'
  }
}
function paperCheck(){
  let botTanlovi = bot[Math.round(Math.random() * 2)]
  if (botTanlovi == 'paper') {
    console.log(player)
    console.log(botTanlovi)
    status.textContent='durrang'
  }
  else if (botTanlovi == "rock") {
    console.log(player)
    console.log(botTanlovi)
    red++
    console.log(playerOchko)
    playerOchko.textContent=red
    status.textContent='player yutti'
  }
  else if (botTanlovi == "scissors") {
    console.log(player)
    console.log(botTanlovi)
    green++
    console.log(botOchko)
    botOchko.textContent=green
    status.textContent='bot yutti'
  }
}
function scissorsCheck(){
  let botTanlovi = bot[Math.round(Math.random() * 2)]
  if (botTanlovi == 'scissors') {
    console.log(player)
    console.log(botTanlovi)
    status.textContent='durrang'
  }
  else if (botTanlovi == "paper") {
    console.log(player)
    console.log(botTanlovi)
    red++
    console.log(playerOchko)
    playerOchko.textContent=red
    status.textContent='player yutti'
  }
  else if (botTanlovi == "rock") {
    console.log(player)
    console.log(botTanlovi)
    green++
    console.log(botOchko)
    botOchko.textContent=green
    status.textContent='bot yutti'
  }
}
rock.addEventListener('click', rockCheck)
paper.addEventListener('click', paperCheck)
scissors.addEventListener('click', scissorsCheck)
  // }
// }
// function restart() {
//   let savol = confirm("yana o'ynashni hohlaysizmi")
//   if (savol == true) {
//     reset()
//     game()
//     cheksiz = true
//   } else if (savol == false) {
//     alert("o'yin tugadi")
//     cheksiz = false
//   }
// }
// function reset() {
//   playerOchko = 0
//   botOchko = 0
// }
// while (cheksiz == true) {
//   game()
//   restart()
// }

// let cheksiz = true
// function game() {
//   for (let i = 0; i < 3; i++) {
//     let player = prompt("rock,scissors,paper,tanlang").toLowerCase()
//     let bot = ['rock', "paper", 'scissors']
//     botTanlovi = bot[Math.round(Math.random() * 2)]
//     if (player == botTanlovi) {
//       console.log(player)
//       console.log(botTanlovi)
//       alert('durrang')
//     } else if (player == 'rock' && botTanlovi == "scissors") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("player yutti")
//       playerOchko++
//       console.log(playerOchko)
//     } else if (player == 'rock' && botTanlovi == "paper") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("bot yutti")
//       botOchko++
//       console.log(botOchko)
//     } else if (player == "paper" && botTanlovi == "rock") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("player yutti")
//       playerOchko++
//       console.log(playerOchko)
//     } else if (player == "paper" && botTanlovi == "scissors") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("bot yutti")
//       botOchko++
//       console.log(botOchko)
//     } else if (player == 'scissors' && botTanlovi == 'rock') {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("bot yutti")
//       botOchko++
//       console.log(botOchko)
//     } else if (player == 'scissors' && botTanlovi == "paper") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert('player yutti')
//       playerOchko++
//       console.log(playerOchko)
//     } else {
//       alert("Faqat rock scissors paper so'zlarini kiriting")
//     }
//   }
// }
// function restart() {
//   let savol = confirm("yana o'ynashni hohlaysizmi")
//   if (savol == true) {
//     reset()
//     game()
//     cheksiz=true
//   } else if (savol == false) {
//     alert("o'yin tugadi")
//     cheksiz=false
//   }
// }
// function reset(){
//   playerOchko=0
//   botOchko=0
// }
// while(cheksiz==true){
// game()
// restart()
// }


























// let playerOchko = 0
// let botOchko = 0
// let cheksiz = true
// function game() {
//   for (let i = 0; i < 3; i++) {
//     let player = prompt("rock,scissors,paper,tanlang").toLowerCase()
//     let bot = ['rock', "paper", 'scissors']
//     botTanlovi = bot[Math.round(Math.random() * 2)]
//     if (player == botTanlovi) {
//       console.log(player)
//       console.log(botTanlovi)
//       alert('durrang')
//     } else if (player == 'rock' && botTanlovi == "scissors") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("player yutti")
//       playerOchko++
//       console.log(playerOchko)
//     } else if (player == 'rock' && botTanlovi == "paper") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("bot yutti")
//       botOchko++
//       console.log(botOchko)
//     } else if (player == "paper" && botTanlovi == "rock") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("player yutti")
//       playerOchko++
//       console.log(playerOchko)
//     } else if (player == "paper" && botTanlovi == "scissors") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("bot yutti")
//       botOchko++
//       console.log(botOchko)
//     } else if (player == 'scissors' && botTanlovi == 'rock') {
//       console.log(player)
//       console.log(botTanlovi)
//       alert("bot yutti")
//       botOchko++
//       console.log(botOchko)
//     } else if (player == 'scissors' && botTanlovi == "paper") {
//       console.log(player)
//       console.log(botTanlovi)
//       alert('player yutti')
//       playerOchko++
//       console.log(playerOchko)
//     } else {
//       alert("Faqat rock scissors paper so'zlarini kiriting")
//     }
//   }
// }
// function restart() {
//   let savol = confirm("yana o'ynashni hohlaysizmi")
//   if (savol == true) {
//     reset()
//     game()
//     cheksiz=true
//   } else if (savol == false) {
//     alert("o'yin tugadi")
//     cheksiz=false
//   }
// }
// function reset(){
//   playerOchko=0
//   botOchko=0
// }
// while(cheksiz==true){
// game()
// restart()
// }


