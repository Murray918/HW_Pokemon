let pokemonCards = [
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
];


let playerOne = {
  hand: [],
  points: 0
};
let playerTwo = {
  hand: [],
  points: 0
};
let cardsInPlay = [];


// Card Dealer
  if(playerOne.hand.length<3) {
	playerOne.hand = pokemonCards.splice(Math.floor(Math.random() * pokemonCards.length), 3);
};
  if (playerTwo.hand.length<3){
  playerTwo.hand = pokemonCards.splice(Math.floor(Math.random() * pokemonCards.length), 3);
};


// Player 1 Card Pick
let playerOneDmg = [];

for(let i=0; i<playerOne.hand.length; i++) {
	playerOneDmg.push(playerOne.hand[i].damage)
};
cardsInPlay.push(Math.max(...playerOneDmg))



//Player 2 Card Pick
if(true) {
	cardsInPlay.push(playerTwo.hand[Math.floor(Math.random() * playerTwo.hand.length)]);
};	



//Console Log The Game

console.log("Round 1!")
console.log("Player One's Hand:", playerOne.hand[0].name, playerOne.hand[1].name, playerOne.hand[2].name)
console.log("Player Two's Hand:", playerTwo.hand[0].name, playerTwo.hand[1].name, playerTwo.hand[2].name)
console.log("Player One picked:", "Damage:"+cardsInPlay[0])
console.log("Player Two picked:", cardsInPlay[1].name+"!","Damage:"+cardsInPlay[1].damage)



//Round Winner
if(cardsInPlay[0]===cardsInPlay[1].damage){
  console.log("It's a Tie!");
}else if(cardsInPlay[0]>cardsInPlay[1].damage) {
  playerOne.points += 1,
  console.log("Player One Won this Turn!"); 
}
else if (cardsInPlay[0]<cardsInPlay[1].damage) {
  playerTwo.points += 1,
  console.log("Player Two Won this Turn!");
};

console.log(playerOne.points)
console.log(playerTwo.points)


 







