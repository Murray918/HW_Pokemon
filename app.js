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

let playerOne = [];
let playerOneDmg = [];
let playerTwo = [];
let cardsInPlay = [];

// Card Dealer
while(playerOne.length<3 || playerTwo.length<3) {
	playerOne.push(pokemonCards[Math.floor(Math.random() * pokemonCards.length)])
	playerTwo.push(pokemonCards[Math.floor(Math.random() * pokemonCards.length)])
};


// Player 1 Card Pick

for(let i=0; i<playerOne.length; i++) {
	playerOneDmg.push(playerOne[i].damage)
};
cardsInPlay.push(Math.max(...playerOneDmg))



//Player 2 Card Pick

if(true) {
	cardsInPlay.push(playerTwo[Math.floor(Math.random() * playerTwo.length)]);
};	


//Round Winner

if(cardsInPlay[0]>cardsInPlay[1].damage) {
	console.log("Player One Won this Turn!") 
}	else console.log("Player Two Won this Turn!")  


//console.log(typeof playerOneDmg[0]==="number")
//SAME AS:
//console.log(Math.max(playerOneDmg[0],playerOneDmg[1],playerOneDmg[2]))
console.log(cardsInPlay)






