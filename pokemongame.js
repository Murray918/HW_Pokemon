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
// player one's hand, and his points
let playerOne = {
	hand: [],
	points:
}
// player two's hand, and his points
let playerTwo = {
	hand: []
	points:
}

// arena to house each players' card currently being played
let arena = []

// for loop to randomize the cards in the deck, and splice 3 cards into player one's hand
for (let i = 0; i <= 2; i++){
	playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}
// for loop to randomize the cards in the deck, and splice 3 cards into player two's hand
for (let i = 0; i <= 2; i++){
	playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}
// console.log the round number
// console.log the players hand
//	console.log the chosen card
// 	console.log who won the turn
// 		console.log who won the round