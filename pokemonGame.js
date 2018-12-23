class Player {
	constructor(name){
		this.name = name
		this.hand = []
		this.deck = []
		this.points = 0
	}
}
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
  { name: "Inciniroar",  damage: 90 }]
let player1 = new Player("player1")
let player2 = new Player("player2")
let randomValue = 0
let rounds = 3
let playCards = 3
let attackers = []
let randomCard = Math.floor(Math.random() * 3)
// a variable that is used to tell the game when there
// are no more cards in the deck array to stop running its while loop
let deckCheck = 0
// This function sets randomValue returns a random value between 0 and 17(18?) which is
// the total amount of cards in the deck.
let randomHandGen = function(){
	randomValue = Math.floor(Math.random() * deck.length)
	return randomValue
}

//This loop will run until there are no more cards in the deck in array
while (deck.length > deckCheck){
	//this function will give us a random number between 1 and 18
	randomHandGen()
	//loop through the deck 18 times
	for(let n = 0; n <= deck.length; n++){
		//Take the randomValue and use it to find a random pokemon within the deck 
		//and compare it to another pokemon in the deck and if they're both equal to eachother...
			if(deck[randomValue] === deck[n]){
				//...Push that pokemon into the player1's hand and ...
				if(deck.length > 9){
					player1.deck.push(deck[randomValue])
					//... remove that card from the deck.
					deck.splice(randomValue,1)
				}
				else{
					/*repeat what we did for player1 but for player2
					 When we do this it searches through the deck again, but only grabs what is remaining in the 
					 deck array and pushes those cards into player2's deck. Then it'll remove that pokemon from the deck array.*/
					player2.deck.push(deck[randomValue])
					deck.splice(randomValue,1)
					//Each of the player's array will now now consists of 9 cards that are all unique
			}
		}	
	}
}
let scoop = 0

// craftHand puts cards from each players deck into each players hand
let craftHand = function(){
	//This while loop will run until each player has 3 elements from the deck array
	// placed in their hand array
	while(player1.hand.length < 3 || player2.hand.length < 3){
		//push the 0 element from player deck to the end of the players hand array
		player1.hand.push(player1.deck[0])
		//remove the 0 element from the deck array
		player1.deck.splice([0],1)
		//push the 0 element from player 2's deck to the end of the player 2's hand array
		player2.hand.push(player2.deck[0])
		//remove the 0 element from the deck array
		player2.deck.splice([0], 1)
	}
	//organize player1.hand from largest damage value to lowest
	player1.hand.sort(function(a, b) {
			return b.damage - a.damage;
	});
	//after everything within this function runs each deck goes from 9 elements, to 6, to 3 and then 0
}

// arena moves the highest damage value in player 1's hand and 
// a random card from player 2's hand into the attackers array
let arena = function(){
	//take a card from hand and place it into the attackers array
	attackers.push(player1.hand.splice(0,1)[0])
	//label the first object in the array as player 1's
	attackers[0].owner = "P1"
	console.log("player 1 chooses ", attackers[0])
	//remove a card from player 2's hand and store in tmp 
	let tmp = player2.hand.pop()
	//label the object removed from player's 2 hand as player 2
	tmp.owner = "p2"
	//push from player 2's tmp array into the arena array as the 2nd object
	attackers.push(tmp)
	console.log("player 2 chooses ", attackers[1])

}

// fight compares the 0 and 1 element's damage values and assigns points
let fight = function(){
	//The 0 element always belongs to player 1 and this if condition states
	//that if the 0 element damage is greater than the 1st element player earns a point
	if(attackers[0].damage > attackers[1].damage){
		console.log("******* Player 1 earns a point")
		player1.points += 1
	}
	//Do the same thing as before but check of the 1st element's damage value is greater than
	//the 0 elements damage value
	else if(attackers[0].damage < attackers[1].damage){
		console.log("******* Player 2 earns a point")
		player2.points += 1
	}
	//If the damage values are the same the game is a tie
	else{
		console.log("******* tie game")
	}
	//Remove the attacking pokemon from the attackers array
	attackers.splice(0,2)
}

//This function runs the game which calls all the previously
//created functions
let gamesBegin = function(){
	craftHand()
	console.log("Round 1!!!! FIGHT")
	//While the players hands are greater than 0 they will put
	//their pokemons from their hands into the arena and fight
	//This will all happen 3 times for a total of 9 pokemon from
	//each players deck.
	while(player1.hand.length > 0 || player2.hand.length > 0){
		arena()
		fight()
	}
	craftHand()
	console.log("Round 2!!!! FIGHT")
	while(player1.hand.length > 0 || player2.hand.length > 0){
		arena()
		fight()
	}

	craftHand()
	console.log("Round 3!!!! FIGHT")
	while(player1.hand.length > 0 || player2.hand.length > 0){
		arena()
		fight()
	}
	if(player1.points > player2.points){
		console.log("PLAYER 1 WINS")
	}
	else{
		console.log("Player 2 WINS")
	}
}

gamesBegin()