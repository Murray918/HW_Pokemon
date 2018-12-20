
poke = [
  { name: "Bulbasaur", damage: 60 }, 
  { name: "Caterpie", damage: 40 }, 
  { name: "Charmander", damage: 70 }, 
  { name: "Clefairy", damage: 90 }, 
  { name: "Jigglypuff", damage: 35 }, 
  { name: "Mankey", damage: 30 }, 
  { name: "Meowth", damage: 60 }, 
  { name: "Nidoran - female", damage: 60 }, 
  { name: "Nidoran - male", damage: 50 }, 
  { name: "Oddish", damage: 40 }, 
  { name: "Pidgey", damage: 50 }, 
  { name: "Pikachu", damage: 50 }, 
  { name: "Poliwag", damage: 80 }, 
  { name: "Psyduck", damage: 65 }, 
  { name: "Rattata", damage: 30 }, 
  { name: "Squirtle", damage: 55 }, 
  { name: "Vulpix", damage: 50 }, 
  { name: "Weedle",  damage: 40 }
]

//here is a function to shuffle the array
function shuffleArray(poke) {
    for (var i = poke.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = poke[i];
        poke[i] = poke[j];
        poke[j] = temp;
    }
}

shuffleArray(poke) // here I am running the shuffle function


let PlayerAhand1 = []
let PlayerBhand1 = []

let cardDistribute = function (playerhand) {

//random gives an index into poke
//a value between 0-17
  random = Math.floor(Math.random()*poke.length)
  playerhand.push(poke[random])
  poke.splice([random],1)
  
  }

  let player2cardplay = function () {
    let cardsIndeck = PlayerBhand1.length
    Player2randomCard = Math.floor(Math.random()* cardsIndeck)
    player2Card = PlayerBhand1.splice(Player2randomCard,1)

  }
let player2Card = []


let player1playcard = []

// This function selects a card for player 1 based on higest damage
let selectCardplayer1 = function () {
  let maxVal = 0
  let index = 0
  for (let i =0; i < PlayerAhand1.length; i++) {
    if(PlayerAhand1[i].damage > maxVal) {
      maxVal = PlayerAhand1[i].damage
      index = i
    }
   

  }

  player1playcard = PlayerAhand1.splice(index,1)

}

shuffleArray(PlayerBhand1)

p1Turnwins = 0
p2Turnwins = 0
p1Roundwins = 0
p2Roundwins = 0

let playgame = function(p1deck,p2deck) {
      

       if( p1deck[0].damage > p2deck[0].damage){
      ++p1Turnwins
      console.log("Player 1 has won the turn using " + p1deck[0].name + "!" )
      console.log("Player 2 has lost the turn using " + p2deck[0].name + "!")
    }
  else if ( p1deck[0].damage < p2deck[0].damage)
    { ++p2Turnwins
    console.log("Player 2 has won the turn using " + p2deck[0].name + "!")
    console.log("Player 1 has lost the turn using " + p1deck[0].name + "!")
    }
  
  else if (p1deck[0].damage === p2deck[0].damage) {
    console.log("draw!")
  }
}

let roundCounter = function() {
  if(p1Turnwins > p2Turnwins){
    (p1Roundwins+ 1)
  }
  else if (p1Turnwins < p2Turnwins){
    (p2Roundwins + 1)
  }
}
/// Once I'm finished run this loop for the game
while (poke.length >= 1) {


// }
/// Dealing 3 cards to each player
for (let i = 0; i <3; i++){
  cardDistribute(PlayerAhand1)
  cardDistribute(PlayerBhand1)
}

selectCardplayer1()

shuffleArray(PlayerBhand1)

player2cardplay()

playgame(player1playcard,player2Card)

console.log(p1Turnwins)

console.log(p2Turnwins)

roundCounter()

console.log(p1Roundwins)
console.log(p2Roundwins)
}