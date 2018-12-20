
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


let Player1hand = []
let Player2hand = []

let cardDistribute = function (playerhand) {

//random gives an index into poke
//a value between 0-17
  random = Math.floor(Math.random()*poke.length)
  playerhand.push(poke[random])
  poke.splice([random],1)
  
  }
// function to get a card to play
  let player2cardplay = function () {
    let cardsIndeck = Player2hand.length
    Player2randomCard = Math.floor(Math.random()* cardsIndeck)
    player2Card = Player2hand.splice(Player2randomCard,1)

  }
let player2Card = []


let player1playcard = []

// This function selects a card for player 1 based on higest damage
let selectCardplayer1 = function () {
  let maxVal = 0
  let index = 0
  for (let i =0; i < Player1hand.length; i++) {
    if(Player1hand[i].damage > maxVal) {
      maxVal = Player1hand[i].damage
      index = i
    }
   

  }

  player1playcard = Player1hand.splice(index,1)

}

shuffleArray(Player2hand)

p1Turnwins = 0
p2Turnwins = 0
p1Roundwins = 0
p2Roundwins = 0

let playgame = function(p1deck,p2deck) {
      

       if( p1deck[0].damage > p2deck[0].damage){
      p1Turnwins++
      console.log("Player 1 has won the turn using " + p1deck[0].name + "!" )
      console.log("Player 2 has lost the turn using " + p2deck[0].name + "!")
    }
  else if ( p1deck[0].damage < p2deck[0].damage)
    { p2Turnwins++
    console.log("Player 2 has won the turn using " + p2deck[0].name + "!")
    console.log("Player 1 has lost the turn using " + p1deck[0].name + "!")
    }
  
  else if (p1deck[0].damage === p2deck[0].damage) {
    console.log("draw!")
  }
}

let roundCounter = function(turnwinsplayer1,turnwinsplayer2) {
  if(turnwinsplayer1 > turnwinsplayer2){
    (p1Roundwins++ )
  }
  else if (turnwinsplayer1 < turnwinsplayer2){
    (p2Roundwins++ )
  }
}
/// Once I'm finished run this loop for the game
while (poke.length >= 1) {

for (i = 0; i<3; i++){
// }
/// Dealing 3 cards to each player
for (let i = 0; i <3; i++){
  cardDistribute(Player1hand)
  cardDistribute(Player2hand)


selectCardplayer1()

shuffleArray(Player2hand)

player2cardplay()

playgame(player1playcard,player2Card)


console.log(p1Turnwins)
console.log(p2Turnwins)

}


roundCounter(p1Turnwins,p2Turnwins)
console.log(p1Roundwins)
console.log(p2Roundwins)
}}