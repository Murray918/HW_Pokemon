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
  points: 0,
  cardsInPlay: []

};
let playerTwo = {
  hand: [],
  points: 0,
  cardsInPlay: []
};

//Turns and Rounds
let game = {
  turn : 1,
  round: 1
};

let randomCard = function (x) {
  return Math.floor(Math.random() * x)
};


let go = function (){

  while (game.turn<=9){

    
    // Card Dealer
    while(playerOne.hand.length<3&&playerTwo.hand.length<3){
    playerOne.hand = pokemonCards.splice(randomCard(pokemonCards.length), 3);
    playerTwo.hand = pokemonCards.splice(randomCard(pokemonCards.length), 3);
    }; 



    // Player 1 Card Pick
    if(playerOne.cardsInPlay.length<3) {
    playerOne.cardsInPlay = playerOne.hand.splice([randomCard(playerOne.cardsInPlay.length)], 1);
    }
    // Player 2 Card Pick
    if(playerTwo.cardsInPlay.length<3) {
    playerTwo.cardsInPlay = playerTwo.hand.splice([randomCard(playerTwo.cardsInPlay.length)], 1);
    };


    //Console Log The Game
    console.log("--------------------Round "+game.round+"!--------------------")
    console.log("          -----------Turn "+game.turn+"!-----------")
    console.log("Player One's Hand:", playerOne.hand)
    console.log("Player Two's Hand:", playerTwo.hand)
    console.log("Player One picked:", playerOne.cardsInPlay[0])
    console.log("Player Two picked:", playerTwo.cardsInPlay[0])
    


    //Round Winner
    if(playerOne.cardsInPlay[0].damage===playerTwo.cardsInPlay[0].damage){
      console.log("It's a Tie!");
    }
    else if(playerOne.cardsInPlay[0].damage>playerTwo.cardsInPlay[0].damage) {
      playerOne.points += 1,
      console.log("Player One Won this Turn!"); 
    }
    else if (playerOne.cardsInPlay[0].damage<playerTwo.cardsInPlay[0].damage) {
      playerTwo.points += 1,
      console.log("Player Two Won this Turn!");
    };


    if(game.turn===4){game.round++};
    if(game.turn===7){game.round++};

    game.turn++
    console.log("Player ONE:",playerOne.points)
    console.log("Player TWO:",playerTwo.points)
    //console.log(pokemonCards)
  }
};
go()

//console.log(playerOne.hand)
//console.log(playerTwo.hand)
//console.log(playerOne.cardsInPlay)
//console.log(playerTwo.cardsInPlay)