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

let playerOne = {
	hand: [],
	points: 0,
}

let playerTwo = {
  hand: [],
  points: 0,
}

// let arena = [
// 	{playerOne_card},
// 	{playerTwo_card}
// ]

// playerOne.hand.push(three random cards)
// playerTwo.hand.push(three random cards)

// Remove random card from deck array and push it into playerOne.hand array


for (let i = 0; i <= 2; i++) {
  playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}

for (let i = 0; i <= 2; i++) {
  playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}

console.log(playerOne.hand)
console.log(playerTwo.hand)
console.log(deck)







