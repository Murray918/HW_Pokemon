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
//create objects for each player
let playerOne = {
	hand: [],
	points: 0
}

let playerTwo = {
  hand: [],
  points: 0
}

//create arena to hold two players' card being played against each other
let arena = [];

//code for one round
console.log('Round 1 Start!');
// Remove random card from deck array and push it into playerOne.hand array
for (let i = 0; i <= 2; i++) {
  playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}
console.log(`Player One drew ${playerOne.hand[0][0].name}, ${playerOne.hand[1][0].name}, and ${playerOne.hand[2][0].name}!`);

// Remove random card from deck array and push it into playerTwo.hand array
for (let i = 0; i <= 2; i++) {
  playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1));
}
console.log(`Player Two drew ${playerTwo.hand[0][0].name}, ${playerTwo.hand[1][0].name}, and ${playerTwo.hand[2][0].name}!`);
//code for one turn

//play hands
//playerOne picks card
function compareNumbers(a, b) {
  return a - b;
}


//playerTwo picks card
arena.push(playerTwo.hand.splice(Math.floor(Math.random() * playerTwo.hand.length), 1));
console.log(arena[0])
// console.log(arena);

// console.log the round number
// console.log the players hand
// console.log the chosen card
// console.log who won the turn
// console.log who won the round



