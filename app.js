/*

The Rules
- There is a deck of 18 cards. Each card has a name value and a damage value. (This data will be supplied as an array of objects)
- Each player is dealt three cards randomly from the deck into their hand.
- Each player will choose to play a card from their hand:
  * The first player will choose whichever card in their hand has the highest damage value
  * The second player will choose a card at random
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
  { name: "Weedle",  damage: 40 }     //17
]

class Player {
	constructor(name) {
		this.name = name;  //store the name of the player
		this.cards = [];   //new player has an empty hand of cards.
		this.points = 0;   //new player should start with 0 points
		this.showCard = {};  //Obj which contain the 1 card the player is going to play that round.
	}
	
	currentPoints() {
		//track the player's current points
		return this.points;
	}
	
	addCards(cardsObject) {
		this.cards.push(cardsObject);
	}
	
	showHand() {
		//this is to keep track of the players complete hand
		//if the hand is empty return "Empty"
		if (this.cards.length === 0) {
			return "Empty"
		} 
		else {
			return this.cards;
		}
	}
}

class globalFunctions extends Player {
	constructor(name,player1,player2) 	{
		super(name)  //sync "this" with the base class
		
		//Major Round is the whole number
		//Minor Round is incremented by the float
		this.round = 1.1;   //start round = 1.1
	}

	//this variable will keep track of the rounds
	showRound() {
		return this.round;
	}

	incrementRound() {
		return this.round = this.round + 0.8;
	}
	incrementFight() {
		return this.round = this.round + 0.1;
	}

	selectCardsPlayer1() {
		//player1 one picks highest card
		let maxCard = 0;
		let indexCard = 0;

		//this will iterate over the elements in the array and then filter out
		//individual elements based off the criteria below
		let actorArray = player1.cards.filter(function (item, index) {
			
			//if I found a max damage card then replace the maxCard variable with the new card
			if (item.damage >= maxCard) {
				maxCard = item.damage;
				indexCard = index;
			}
			return index;  //keep track of the index to splice out the highest damage card
		});
		
		//got to remove the card from the player's deck!!!
		//this will mutate the original array!!!
		player1.showCard = player1.cards.splice(indexCard,1);  
		let justObj = player1.showCard[0];
		player1.showCard = justObj;
		
		return justObj;
	}

	selectCardsPlayer2() {
		//player2 selects a random card
		let cardsInDeck = player2.cards.length;  
		
		//select a random number between 0 and Max Cards in Player 2 deck
		randCard = Math.floor(Math.random() * cardsInDeck);   

		//need to remove the selected object from the array and return it
		//must return just the object.  Do not return an array of objects.		
		let arrObj = player2.cards.splice(randCard,1);
		let justObj = arrObj[0];
		player2.showCard = justObj;

		return justObj;
	}

	comparePlayerCards() {
	
		//Compare the cards damage value
		if(player1.showCard.damage > player2.showCard.damage) {
			//player 1 wins the hand.  Increment their win total
			++player1.points;
			return `Player 1 ${player1.name} wins the battle!!!!`
		}
		else if (player1.showCard.damage < player2.showCard.damage)	{
			//player 2 wins the hand.  Increment their win total
			++player2.points;
			return `Player 2 ${player2.name} wins the battle!!!!`
		}
		else {
			//increment no one since it was a tie
			return "####Tie####";
		}
	}
	endGameWinner() {
		//determine who won the game

		if(player1.points > player2.points) {
			//player 1 wins the Game
			return `Player 1 ${player1.name} wins the game!!!!`;
		}
		else if (player1.points < player2.points)	{
			//player 2 wins the Game
			return `Player 2 ${player2.name} wins the game!!!!`;
		}
		else {
			//Tie
			return "A tie occurred.  Both players win!!!";
		}
	}
}

//assign random cards function.  
//I did this to show a function independent of a class.  
function assignCards(playerObj) {
	
	//get the current length of the pokemonArray global array.  
	//Remember, the array can shrink as cards are removed!!!
	let cardsInDeck = pokemonArray.length;  
	
	//select a random number between 0 and Max Cards in deck
	randCard = Math.floor(Math.random() * cardsInDeck);   
	
	//need to remove the selected object from the array and return it
	//must return just the object.  Do not return an array of objects.
	let arrObj = pokemonArray.splice(randCard,1);
	let justObj = arrObj[0];
	playerObj.addCards(justObj);
	
	return arrObj[0];
}

//create the two players each with a name
let player1 = new Player("Chris");
let player2 = new Player("Cassie");

//create a global function to control the actions of the game.
let globalFunc = new globalFunctions("who",player1,player2);


console.log(`########### ${player1.name} (Player 1) vs ${player2.name} (Player 2) #############`);

//start of the main do..while loop.  Will loop till the global pokemonArray array is out of cards!
do {
	console.log(`^^^^^^^^Selecting Starting Cards Round ${globalFunc.showRound().toFixed(1)} ^^^^^^^^^^^^^^^^`);
	
	//assign players each 3 cards
	for (let i=0; i <=2; i++) {
		assignCards(player1);
		assignCards(player2);
	}

	console.log(`******** Round ${globalFunc.showRound().toFixed(1)} *********** Round ${globalFunc.showRound().toFixed(1)} ************ Round ${globalFunc.showRound().toFixed(1)} *************`);
	console.log(`--------------------------Show Cards---------------------------`);
	console.log(player1.showHand());
	console.log(player2.showHand());
	console.log("")
	console.log(`------------------------Fight-------------------------`);
	let player1Card = globalFunc.selectCardsPlayer1();
	let player2Card = globalFunc.selectCardsPlayer2();
	console.log(player1Card)
	console.log("        vs        ")
	console.log(player2Card)
	console.log("")
	console.log (`${globalFunc.comparePlayerCards()}`);
	console.log("")
	console.log(`Player 1 (${player1.name}) current points = ${player1.currentPoints()}`);
	console.log(`Player 2 (${player2.name}) current points = ${player2.currentPoints()}`);
	console.log("")

	console.log("")
	globalFunc.incrementFight();

	console.log(`******** Round ${globalFunc.showRound().toFixed(1)} *********** Round ${globalFunc.showRound().toFixed(1)} ************ Round ${globalFunc.showRound().toFixed(1)} *************`);
	console.log(`------------------------Fight-------------------------`);
	player1Card = globalFunc.selectCardsPlayer1();
	player2Card = globalFunc.selectCardsPlayer2();
	console.log(player1Card)
	console.log("        vs        ")
	console.log(player2Card)
	console.log("")
	console.log (`${globalFunc.comparePlayerCards()}`);
	console.log("")
	console.log(`Player 1 (${player1.name}) current points = ${player1.currentPoints()}`);
	console.log(`Player 2 (${player2.name}) current points = ${player2.currentPoints()}`);
	console.log("")

	console.log("")
	globalFunc.incrementFight();

	console.log(`******** Round ${globalFunc.showRound().toFixed(1)} *********** Round ${globalFunc.showRound().toFixed(1)} ************ Round ${globalFunc.showRound().toFixed(1)} *************`);
	console.log(`-------------------------Fight--------------------------`);
	player1Card = globalFunc.selectCardsPlayer1();
	player2Card = globalFunc.selectCardsPlayer2();
	console.log(player1Card)
	console.log("        vs        ")
	console.log(player2Card)
	console.log("")
	console.log (`${globalFunc.comparePlayerCards()}`);
	console.log("")
	console.log(`Player 1 (${player1.name}) current points = ${player1.currentPoints()}`);
	console.log(`Player 2 (${player2.name}) current points = ${player2.currentPoints()}`);
	console.log("")

	globalFunc.incrementRound();

} while(pokemonArray.length >= 1)

console.log("*********************************************************************************************")
console.log("*********************************************************************************************")
console.log("*********************************************************************************************")
console.log("***********                                                                       ***********")
console.log(`***********\t\t\t${globalFunc.endGameWinner()}\t\t\t\t\t\t\t***********`)
console.log("***********                                                                       ***********")
console.log("*********************************************************************************************")
console.log("*********************************************************************************************")
console.log("*********************************************************************************************")

