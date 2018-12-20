let pokemonCards = 
[
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







// assign AI to player1 and player 2
// They should each draw 3 cards

//hand of 6 cards before split
let hand = []


let player1 = {
	cards: [], 
	// playCard: function(){

	}

// }
	
let player2 = {
	cards: [],
	// playCard: function(){

	}

// }



//functions

//Selects random card from deck of Pokemon cards
let randomCard = function(){
  let randomCardIndex = Math.floor(Math.random() * pokemonCards.length)
  let randomCardValue = pokemonCards[randomCardIndex]
return [randomCardIndex, randomCardValue]
} 

//Draws 6 random cards 
let drawCards = function(){
for(i = 0; i < 6; i++){
	
	 let card = randomCard();
//places 6 cards into the hand
   hand.push(card[1])
  //removing cards pushed into hand
   pokemonCards.splice(card[0], 1)
   
   
}
	}

//split hand array into 2
let splitCards = function(){
  p1Split = hand.slice(0,3)
  p2Split = hand.slice(3,6)
 player1.cards.push(p1Split)
 player2.cards.push(p2Split)



}



//Conditions
//Automatically plays player1 highest damage card
let player1Card = function(){
 //for(i = 0, i <= 3; i++);                           
if(player1.cards[0][0].damage > player1.cards[0][1].damage && player1.cards[0][2].damage)
	console.log(player1.cards[0][0])
else if(player1.cards[0][1].damage > player1.cards[0][0].damage && player1.cards[0][2].damage)
	console.log(player1.cards[0][1])
else 
	console.log(player1.cards[0][2])
  }

//plays one card at random
let player2Card = function(){
 
}


//Game

drawCards();
splitCards();
player1Card()















//condition for players
//The first player will choose whichever card in their hand has the highest damage value
//The second player will choose a card at random











// Outcome
/*if(player1cards.damage > player2cards.damage)
	console.log("Player 1 WINS!")
*/




