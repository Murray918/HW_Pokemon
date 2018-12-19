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
	name: "Ash",
  hand: [],
	turnPoints: 0,
  roundsWon: 0
}

let playerTwo = {
  name: "Gary",
  hand: [],
  turnPoints: 0,
  roundsWon: 0
}

//create arena to hold two players' card being played against each other
let arena = [];

//code for one round
console.log(`Round 1 Start!`);
// Remove random card from deck array and push it into playerOne.hand array
for (let i = 0; i <= 2; i++) {
  playerOne.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
}
console.log(`Player One drew ${playerOne.hand[0].name}, ${playerOne.hand[1].name}, and ${playerOne.hand[2].name}.`);

// Remove random card from deck array and push it into playerTwo.hand array
for (let i = 0; i <= 2; i++) {
  playerTwo.hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
}
console.log(`Player Two drew ${playerTwo.hand[0].name}, ${playerTwo.hand[1].name}, and ${playerTwo.hand[2].name}.`);

// code for one turn

// play hands

// playerOne picks card
let highestCard= [];
if (playerOne.hand[0].damage >= playerOne.hand[1].damage) {
  if (playerOne.hand[0].damage >= playerOne.hand[2].damage) {
    highestCard = playerOne.hand[0]
  } else {
    highestCard = playerOne.hand[2]
  }
}
else if (playerOne.hand[0].damage < playerOne.hand[1].damage) {
  if (playerOne.hand[1].damage > playerOne.hand[2].damage) {
    highestCard = playerOne.hand[1]
  } else {
    highestCard = playerOne.hand[2]
  }
}
arena.push(highestCard);

// playerOne.hand.sort
// .sort(function compareFunction(a, b) {
//   return a - b;
// })


// playerTwo picks card
let randomCard = playerTwo.hand.splice(Math.floor(Math.random() * playerTwo.hand.length), 1)[0]
arena.push(randomCard);

// console.log(arena);
console.log(`${arena[0].name} vs. ${arena[1].name}`)

//determine winner of turn
if (arena[0].damage > arena[1].damage) {
  console.log(`${arena[0].name} beat ${arena[1].name}. Player One wins!`)
  playerOne.turnPoints ++
} else if (arena[1].damage > arena[0].dmg) {
  console.log(`${arena[1].name} beat ${arena[0].name}. Player Two wins!`)
  playerTwo.turnPoints ++
} else {
  console.log(`It's a...DRAW!`)
}


// console.log who won the round
if (playerOne.turnPoints > playerTwo.turnPoints) {
  console.log(`Round 1 Results: Player 1 is in the lead!`)
} else if (playerTwo.turnPoints > playerOne.turnPoints) {
  console.log(`Round 1 Results: Player 2 is in the lead!`)
} else {
  console.log(`Round 1 Results: It's a draw!`)
}


