/*

The Rules
- There is a deck of 18 cards. Each card has a name value and a damage value. (This data will be supplied as an array of objects)
- Each player is dealt three cards randomly from the deck into their hand.
- Each player will choose to play a card from their hand:
- The first player will choose whichever card in their hand has the highest damage value
- The second player will choose a card at random
- The player whose card has the higher damage value wins the turn.
- This will repeat for two more turns, until there are no more cards left in each player's hand.
- When the players run out of cards in their hand, the round ends.
- Whoever has the most points at the end of the round wins the round.
- This repeats for two more rounds, until the deck is empty and all cards have been played.
- Whoever has won the most rounds wins the game.

The View
The following should be logged to the console

Per round:
- The round number
- Each player's hand
Per turn:
- Each player's chosen card
- Who won the turn
- Who won the round
- Total Scores Then, it should log at the end of the game which player won the game.


*/

const pokemonArray = [
  { name: "Bulbasaur", damage: 60 }, //0
  { name: "Caterpie", damage: 40 }, 
  { name: "Charmander", damage: 60 }, 
  { name: "Clefairy", damage: 50 }, 
  { name: "Jigglypuff", damage: 60 }, 
  { name: "Mankey", damage: 30 },    //5
  { name: "Meowth", damage: 60 }, 
  { name: "Nidoran - female", damage: 60 }, 
  { name: "Nidoran - male", damage: 50 }, 
  { name: "Oddish", damage: 40 }, 
  { name: "Pidgey", damage: 50 },    //10
  { name: "Pikachu", damage: 50 }, 
  { name: "Poliwag", damage: 50 }, 
  { name: "Psyduck", damage: 60 }, 
  { name: "Rattata", damage: 30 }, 
  { name: "Squirtle", damage: 60 },   //15
  { name: "Vulpix", damage: 50 }, 
  { name: "Weedle",  damage: 40 }
]



class Player{
	constructor(name)
	{
		this.name = name;
		this.cards = cards;
		this.points = playerPoints;
		//this.cat = {dog: "dsfdsf", goat: "sdfdsf"};
		//this.moose = [1,2,3,4];
	}

	points()
	{
		//console.log(this.States + " " + this.moose[1] + " " + this.cat.dog);
	}
	hand() 
	{

	}
}

class global extends Player{
	constructor(name,player1,player2)
	{
		super(name)
		//this.cat = {dog: "dsfdsf", goat: "sdfdsf"};
		//this.moose = [1,2,3,4];
	}

	points()
	{
		//console.log(this.States + " " + this.moose[1] + " " + this.cat.dog);
	}
	hand() 
	{

	}
}

//assign random cards function
function assignCards()
{
	//get the current length of the array.  Remember, the array can shrink as cards are removed!!!
	let cardsInDeck = pokemonArray.length;  
	console.log(cardsInDeck);

	//select a random number between 0 and 17
	randCard = Math.floor(Math.random() * cardsInDeck);   
	console.log(randCard);

	//need to remove the selected object from the array and return it
	return pokemonArray.splice(randCard,1);
	
}

let card = assignCards();
console.log(card);


