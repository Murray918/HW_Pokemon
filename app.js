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

// let playerOne = {
// 	hand: [
// 		{card1},
// 		{card2},
// 		{card3}
// 			],
// 	points: 0,
// }

// let playerTwo = {
//   hand: [
//     {card1},
//     {card2},
//     {card3}
//       ],
//   points: 0,
// }

// let arena = [
// 	{playerOne_card},
// 	{playerTwo_card}
// ]

// playerOne.hand.push(three random cards)
// playerTwo.hand.push(three random cards)

console.log(deck.splice(Math.floor(Math.random() * deck.length), 1));



