class Player {
	constructor(name){
		this.maxDamage = 0
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
let round = 3
// a variable that is used to tell the game when there
// are no more cards in the deck array to stop running a while loop
let deckCheck = 0
// This function sets randomValue returns a random value between 0 and 17(18?) which is
// the total amount of cards in the deck.
let randomHandGen = function(){
	randomValue = Math.floor(Math.random() * deck.length)
	return randomValue
}
// craftHand will push an element from the player1 deck into
let craftHand = function(){
	for(let i = 0; i < 3; i++){
		player1.hand.push(player1.deck[i])
		player2.hand.push(player2.deck[i])
	}
	player1.deck.pop()
	player2.deck.pop()
}
let playCard = function(){
	max = 0
	index = 0
	for(let i = 0; i < player1.hand.length; i++){
		if(player1.hand[i].damage > max){
			max = player1.hand[i].damage
			index = i
		}
	}
	player1.maxDamage = player1.hand.splice(index, 1)
	return player1.maxDamage
}
//This loop will run until there are no more cards in the deck in array
while (deck.length > deckCheck){
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
//The main function that begins the game
let gamesBegin = function(){
	if(round > 0){
		let round1 = function(){
			console.log("Round 1 Begins")
			craftHand()
			playCard()

			console.log("player 1 draws ", player1.hand, "and chooses ", player1.maxDamage)
			console.log("player 2 draws ", player2.hand)
				//checking for the highest damage value within player 1's hand and
				// seeing if it is larger than player 2's damage value. If it is
				// log Player 1 wins and if it is not, log player 2 wins
				if(player1.maxDamage = player2.hand){
					player1.points += 1
				}
				else if(player2.hand.damage > player1.hand.damage){
					player2.points += 1
				}
				else{
					//console.log("This hand was a tie, no points awarded")
				}
			
			if (player1.points > player2.points){
				console.log("Player 1 wins round 1")
			}
			else{
				console.log("Player 2 wins round 1")
			}
			//After round 1 is over, empty each players hand
			player1.hand = []
			player2.hand = []
		}
		round1()
		round -= 1

		let round2 = function(){
			console.log("Round 2 Begins")
			craftHand()
			for(let i = 0; i < 3; i++){
				//checking for the highest damage value within player 1's hand and
				// seeing if it is larger than player 2's damage value. If it is
				// log Player 1 wins and if it is not, log player 2 wins
				if(Math.max(null,player1.hand[i].damage) > player2.hand[i].damage){
					player1.points += 1
				}
				else if(player2.hand[i].damage > player1.hand[i].damage){
					player2.points += 1
				}
				else{
					//console.log("This hand was a tie, no points awarded")
				}
			}
			if (player1.points > player2.points){
				//console.log("Player 1 wins round 1")
			}
			else{
				//console.log("Player 2 wins round 1")
			}
		}
		//round2()
		round -= 1

		let round3 = function(){
			//console.log("Round 3 Begins")
			for(let i = 0; i < 3; i++){

				if(player1.deck.length && player2.deck.length > 0){
					craftHand(i)
				}
			
				//checking for the highest damage value within player 1's hand and
				// seeing if it is larger than player 2's damage value. If it is
				// log Player 1 wins and if it is not, log player 2 wins
				if(Math.max(null,player1.hand[i].damage) > player2.hand[i].damage){
					player1.points += 1
				}
				else if(player2.hand[i].damage > player1.hand[i].damage){
					player2.points += 1
				}
				else{

					//console.log("This hand was a tie, no points awarded")
				}
			}
			if (player1.points > player2.points){
				//console.log("Player 1 wins round 1")
			}
			else{
				//console.log("Player 2 wins round 1")
			}

		}
		//round3()
		round -= 1
	}
	// console.log("Player 1 points total " + player1.points)
 	// 	console.log("Player 2 points total " + player2.points)

	// if(round == 0 && player1.points > player2.points){
	// 	console.log("Player 1 wins it all!")
	// }
	// else if (player1.points < player2.points){
	// 	console.log("Player 2 wins it all!")
	// }
	// else{
	// 	console.log("what a dumb game, it's a tie")
	// }
}

gamesBegin()