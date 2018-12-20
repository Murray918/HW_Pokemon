


// These are the 18 cards in the deck. 
let pokemonCards = [
  { name: "Bulbasaur", damage: 80 }, 
  { name: "Caterpie", damage: 40 }, 
  { name: "Charmander", damage: 60 }, 
  { name: "Clefairy", damage: 50 }, 
  { name: "Jigglypuff", damage: 60 }, 
  { name: "Mankey", damage: 30 }, 
  { name: "Meowth", damage: 20 }, 
  { name: "Nidoran - female", damage: 90 }, 
  { name: "Nidoran - male", damage: 50 }, 
  { name: "Oddish", damage: 40 }, 
  { name: "Pidgey", damage: 50 }, 
  { name: "Pikachu", damage: 50 }, 
  { name: "Poliwag", damage: 30 }, 
  { name: "Psyduck", damage: 60 }, 
  { name: "Rattata", damage: 30 }, 
  { name: "Squirtle", damage: 70 }, 
  { name: "Vulpix", damage: 50 }, 
  { name: "Weedle",  damage: 40 }
]

// player object to store current cards in the players hand
let player = function(hand){
   this.hand = hand
}

// a function to return the card in the players hand and removes it from the players hand 
player.prototype.playCard = function(index){
	return this.hand.splice(index, 1)[0]
}

// creates new player objects with 3 cards in their hand
let playerConstructor = function() {
	return new player(usedCards())
}

// this function shuffles the pokemonCards and makes the deck random
let shuffle = function(randomCards) {
    for (let i = pokemonCards.length-1; i >=0; i--) {
       let randomChoice = Math.floor(Math.random()* (i+1))
       let cardsIndex = randomCards[randomChoice]
       randomCards[randomChoice] = randomCards[i]; 
        randomCards[i] = cardsIndex
    }
}
shuffle(pokemonCards)
//console.log(pokemonCards)

// returning 3 cards from pokemonCards in an array
let usedCards = function() {
	return [pokemonCards.pop(), pokemonCards.pop(), pokemonCards.pop()]
	
}

// this creates two new player objects
let player1 = playerConstructor()
let player2 = playerConstructor()


// function to get the index of the card with the highest damage 
let getHighestCard = function(hand){
	let currentHighest = hand[0].damage
	let highestIndex = 0
	for(let i = 0; i < hand.length; i++){
		if(currentHighest < hand[i].damage){
			currentHighest = hand[i].damage
			highestIndex = i
		}
	}
	return highestIndex
}


let player1RoundPoints = 0
let player2RoundPoints = 0


// a loop to run the whole game. this loop will run until there are no more elements in the pokemonCard array. 
while(pokemonCards.length > 0){
	let player1TurnPoints = 0
   	let player2TurnPoints = 0

// this loop is running until there are no more cards in the players hand
   while(player1.hand.length > 0 && player2.hand.length > 0){
   	let player1Card = player1.playCard(getHighestCard(player1.hand)) // this gets the highest damage card for player 1 to play
   	let player2Card = player2.playCard(Math.floor(Math.random()* player2.hand.length - 1)) // this gets a random card for player 2 to play
   	console.log('---------------------------------')
   	console.log('Player1 plays ' + player1Card.name + ' which has ' + player1Card.damage + ' damage')
   	console.log('Player2 plays ' + player2Card.name + ' which has ' + player2Card.damage + ' damage')
// this if statment determines which player wins the turn   	
   	if(player1Card.damage > player2Card.damage){
   	 player1TurnPoints++
     console.log("Player1 wins this turn!")
   	} else if(player2Card.damage > player1Card.damage){
   		player2TurnPoints++
   		console.log("Player2 wins this turn!")
   	}else {
   		console.log("No one wins! Try again!")
   	}
   }
// this shows which player wins the round
   if(player1TurnPoints > player2TurnPoints){
   	   player1RoundPoints++
   	console.log('Player1 wins this round!')
   }else if(player2TurnPoints > player1TurnPoints){
   	   player2RoundPoints++
   	console.log('Player2 wins this round!')
   }else{
   	console.log('Nobody wins this round!')
   }
// these statements give each player three more cards   
   player1.hand = usedCards()
   player2.hand = usedCards()
}


console.log('---------------------------------')
console.log('Player1 has won ' + player1RoundPoints + ' rounds')
console.log('Player2 has won ' + player2RoundPoints + ' rounds')

// this shows which player wins the game or if it's a draw
if(player1RoundPoints > player2RoundPoints){
	console.log('Player1 wins the game!! YAY!')
}else if(player2RoundPoints > player1RoundPoints){
	console.log('Player2 wins the game!! YAY!')
}else{
	console.log('It\'s a draw!')
}


