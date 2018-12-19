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
	points:0
}
// player two's hand, and his points
let playerTwo = {
	hand: [],
	points:0 
}

// arena to house each players' card currently being played
let arena = []

// code for 1 round
console.log("Round 1, Start!")
// for loop to randomize the cards in the deck, and splice 3 cards into player one's hand
for (let i = 0; i <= 2; i++){
	playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}
// edit output of console.log so that console provides which cards were drawn, rather than [object Objects]
console.log(`Player One drew ${playerOne.hand[0][0].name}, ${playerOne.hand[1][0].name}, ${playerOne.hand[2][0].name}!`)
// for loop to randomize the cards in the deck, and splice 3 cards into player two's hand
for (let i = 0; i <= 2; i++){
	playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}
// output for the hand that player two drew
console.log(`Player Two drew ${playerTwo.hand[0][0].name}, ${playerTwo.hand[1][0].name}, ${playerTwo.hand[2][0].name}!`)
// used to randomly push a card from player two's hand into the arena
arena.push(playerTwo.hand.splice(Math.floor(Math.random() * playerTwo.hand.length), 1));
	 console.log(arena)
// console.log the round number
// console.log the players hand
//	console.log the chosen card
// 	console.log who won the turn
// 		console.log who won the round