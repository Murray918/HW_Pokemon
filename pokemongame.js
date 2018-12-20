// deck that player's cards will be pulled from 
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
	turnPoints: 0,
	roundsWon: 0
}
// player two's hand, and his points
let playerTwo = {
	hand: [],
	turnPoints: 0, 
	roundsWon: 0
}

// arena to house each players' card currently being played
let arena = []

// Loops that encompass rounds 1-3
for (let i = 0; i < 3; i++){

// console.log the round number
console.log("##############")
console.log("Round " + (i+1) + " Start!")
console.log("##############")
console.log(" ")

// a for loop to randomize the cards in the deck, and splice 3 cards into player one's hand
for (let i = 0; i <= 2; i++){
	playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
}
// console log that shares the names of the cards in player one's hand
console.log(`Player One drew ${playerOne.hand[0].name}, ${playerOne.hand[1].name}, ${playerOne.hand[2].name}!`)

// for loop to randomize the cards in the deck, and splice 3 cards into player two's hand
for (let i = 0; i <= 2; i++){
	playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
}

// console log that shares the names of the cards in player two's hand
console.log(`Player Two drew ${playerTwo.hand[0].name}, ${playerTwo.hand[1].name}, ${playerTwo.hand[2].name}!`)
console.log(" ")

// this is where turns 1-3 loop
for (let i = 0; i <3; i++){
		console.log("Turn "+ (i+1) + "!")
	// logic to choose the highest damage card from players ones hand, and move that card into the arena
	playerOne.hand.sort(function compareNumbers(a, b){
	                   return b.damage - a.damage
	               });
	// put a card from player one's hand into the arena for play
	arena.push(playerOne.hand.splice(0,1)[0])

	// // used to randomly push a card from player two's hand into the arena
	arena.push(playerTwo.hand.splice(Math.floor(Math.random() * playerTwo.hand.length), 1)[0]);
		 
	// who played which cards
	console.log("~~~~~~~~~~~~~~~~~~~")
		console.log(arena[0].name + " vs. " + arena[1].name);

	// 	console.log who won the turn
	if (arena[0].damage < arena[1].damage){
		console.log("Player One wins!")
		playerOne.turnPoints += 1
	}
	else if (arena[0].damage > arena[1].damage){ 
		console.log("Player Two wins!")
		playerTwo.turnPoints += 1
	}
	else console.log("Equal Damage! A DRAW!")
	console.log("~~~~~~~~~~~~~~~~~~~")
	arena.pop()
	arena.pop()
}
// who won the round
	if (playerOne.turnPoints < playerTwo.turnPoints){
		console.log("")
		console.log("Round " + (i+1) +" belongs to Player Two!")
		console.log("")
		playerOne.roundsWon += 1
	}
	else if (playerOne.turnPoints > playerTwo.turnPoints){ 
		console.log("Round " + (i+1) +" belongs to Player One!")
		playerTwo.roundsWon += 1
		console.log("")
	}
	else console.log("A DRAW!?")
	playerOne.turnPoints = 0
	playerTwo.turnPoints = 0}
	console.log("")
	if (playerOne.roundsWon < playerTwo.roundsWon){
		console.log("Player Two wins the tournament!!")
	}
	// who won the tournament
	else if (playerOne.roundsWon > playerTwo.roundsWon){ 
		console.log("Player One wins the tournament!!")

	}