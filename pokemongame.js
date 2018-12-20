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

// console.log the round number
console.log("Round 1, Start!")


// console.log the players hand
// for loop to randomize the cards in the deck, and splice 3 cards into player one's hand
for (let i = 0; i <= 2; i++){
	playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
}
// edit output of console.log so that console provides which cards were drawn, rather than [object Objects]
console.log(`Player One drew ${playerOne.hand[0].name}, ${playerOne.hand[1].name}, ${playerOne.hand[2].name}!`)
// for loop to randomize the cards in the deck, and splice 3 cards into player two's hand
for (let i = 0; i <= 2; i++){
	playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
}

// output for the hand that player two drew
console.log(`Player Two drew ${playerTwo.hand[0].name}, ${playerTwo.hand[1].name}, ${playerTwo.hand[2].name}!`)

// this is where turns 1-3 loop
for (let i = 0; i <3; i++){
		console.log("Turn "+ (i+1) + "!")
	// logic to choose the highest damage card from players ones hand, and move that card into the arena
	playerOne.hand.sort(function compareNumbers(a, b){
	                   return b.damage - a.damage
	               });
	let highestCard = playerOne.hand[0];
	arena.push(playerOne.hand.splice(0,1)[0])

	// // used to randomly push a card from player two's hand into the arena
	arena.push(playerTwo.hand.splice(Math.floor(Math.random() * playerTwo.hand.length), 1)[0]);
	// //	console.log the chosen card	
		 
	// who played which cards
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
	arena.pop()
	arena.pop()
}
	if (playerOne.turnPoints < playerTwo.turnPoints){
		console.log("Round 1 belongs to Player Two!")
		playerOne.roundsWon += 1
	}
	else if (playerOne.turnPoints > playerTwo.turnPoints){ 
		console.log("Round 1 belongs to Player One!")
		playerTwo.roundsWon += 1
	}
	else console.log("Equal Damage! A DRAW!")
	playerOne.turnPoints = 0
	playerTwo.turnPoints = 0
	// Use this to announce the winner of the round
	// if (playerOne.turnPoints > playerTwo.turnPoints){
	// 	console.log("The winner of Round 1 is Player One!")}

	// // 		console.log who won the round