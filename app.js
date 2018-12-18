let deck = [
  { name: "Bulbasaur", damage: 60 }, 
  { name: "Caterpie", damage: 40 }, 
  { name: "Charmander", damage: 60 }, 
  { name: "Clefairy", damage: 50 }, 
  { name: "Jigglypuff", damage: 60 }, 
  { name: "Mankey", damage: 30 }, 
  { name: "Meowth", damage: 60 }, 
  { name: "Nidoran - female", damage: 60 }, 
  { name: "Nidoran - male", damage: 50 }, 
  { name: "Oddish", damage: 40 }, 
  { name: "Pidgey", damage: 50 }, 
  { name: "Pikachu", damage: 50 }, 
  { name: "Poliwag", damage: 50 }, 
  { name: "Psyduck", damage: 60 }, 
  { name: "Rattata", damage: 30 }, 
  { name: "Squirtle", damage: 60 }, 
  { name: "Vulpix", damage: 50 }, 
  { name: "Weedle",  damage: 40 }
]
//create objects for each player
let playerOne = {
	hand: [],
	points: 0,
}

let playerTwo = {
  hand: [],
  points: 0,
}

//create arena to hold two players' card being played against each other
let arena = []

//code for one round

// Remove random card from deck array and push it into playerOne.hand array
for (let i = 0; i <= 2; i++) {
  playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}
// Remove random card from deck array and push it into playerTwo.hand array
for (let i = 0; i <= 2; i++) {
  playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}

//code for one turn

//play hands

//compare cards







