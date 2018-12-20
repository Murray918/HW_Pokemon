/*
----------------------------------------------------------------------------------------------------------
Name: War Card Game
Author: Jacob Werbin
Modified: 12/20/2018
Description: Basic War game played out automatically between two "AI" players; functions similarly to
the classic War card game in which whoever has the higher card value wins the round. The game will play out
until there are no more cards left within the deck. Whoever wins more rounds wins the game.
----------------------------------------------------------------------------------------------------------
*/

//array of objects with "name" and "damage" properties represented as a deck of cards
let cardArray = [
  { name: "Ace of Spades", damage: 1 }, 
  { name: "Two of Spades", damage: 2 }, 
  { name: "Three of Spades", damage: 3 }, 
  { name: "Four of Spades", damage: 4 }, 
  { name: "Five of Spades", damage: 5 }, 
  { name: "Six of Spades", damage: 6 }, 
  { name: "Seven of Spades", damage: 7 }, 
  { name: "Eight of Spades", damage: 8 }, 
  { name: "Nine of Spades", damage: 9 }, 
  { name: "Ten of Spades", damage: 10 }, 
  { name: "Jack of Spades", damage: 11 }, 
  { name: "Queen of Spades", damage: 12 },
  { name: "King of Spades", damage: 13 },
  { name: "Ace of Clubs", damage: 1 }, 
  { name: "Two of Clubs", damage: 2 }, 
  { name: "Three of Clubs", damage: 3 }, 
  { name: "Four of Clubs", damage: 4 }, 
  { name: "Five of Clubs", damage: 5 }, 
  { name: "Six of Clubs", damage: 6 }, 
  { name: "Seven of Clubs", damage: 7 }, 
  { name: "Eight of Clubs", damage: 8 }, 
  { name: "Nine of Clubs", damage: 9 }, 
  { name: "Ten of Clubs", damage: 10 }, 
  { name: "Jack of Clubs", damage: 11 }, 
  { name: "Queen of Clubs", damage: 12 },
  { name: "King of Clubs", damage: 13 },
  { name: "Ace of Diamonds", damage: 1 }, 
  { name: "Two of Diamonds", damage: 2 }, 
  { name: "Three of Diamonds", damage: 3 }, 
  { name: "Four of Diamonds", damage: 4 }, 
  { name: "Five of Diamonds", damage: 5 }, 
  { name: "Six of Diamonds", damage: 6 }, 
  { name: "Seven of Diamonds", damage: 7 }, 
  { name: "Eight of Diamonds", damage: 8 }, 
  { name: "Nine of Diamonds", damage: 9 }, 
  { name: "Ten of Diamonds", damage: 10 }, 
  { name: "Jack of Diamonds", damage: 11 }, 
  { name: "Queen of Diamonds", damage: 12 },
  { name: "King of Diamonds", damage: 13 },
  { name: "Ace of Hearts", damage: 1 }, 
  { name: "Two of Hearts", damage: 2 }, 
  { name: "Three of Hearts", damage: 3 }, 
  { name: "Four of Hearts", damage: 4 }, 
  { name: "Five of Hearts", damage: 5 }, 
  { name: "Six of Hearts", damage: 6 }, 
  { name: "Seven of Hearts", damage: 7 }, 
  { name: "Eight of Hearts", damage: 8 }, 
  { name: "Nine of Hearts", damage: 9 }, 
  { name: "Ten of Hearts", damage: 10 }, 
  { name: "Jack of Hearts", damage: 11 }, 
  { name: "Queen of Hearts", damage: 12 },
  { name: "King of Hearts", damage: 13 },
  { name: "Joker", damage: 100 },
  { name: "Joker", damage: 100 }
]
//get a new shuffled array using the elements from cardArray
let shuffledCards = shuffleCards(cardArray)

//Player class to store the players current hand
class Player {
    constructor(cardArray) {
	   this.hand = []
       this.getPlayerHand(cardArray)
    }
    //prototype method to get a card from the player's hand array that they intend to play, accepts the index of the card to return
    getPlayCard(cardIndex) {
        return this.hand.splice(cardIndex, 1)[0]
    }
    //this prototype method adds 3 cards from the shuffled cardArray to the players hand and removes them from the array
    //Parameter: the array of shuffled cards
    //Return: undefined
    getPlayerHand(cardArray) {
        this.hand = [cardArray.pop(), cardArray.pop(), cardArray.pop()]
    }
}

//use to shuffle an array
//Parameter: an array to be shuffled
//Return: nothing
function shuffleCards(inputArray) {
    let array = inputArray.slice(0)
    let j, x, i = 0
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array
}

//This function returns the index of the card object with the highest damage value, used to get the card player1 will play
//Parameter: the current players hand
//Return: The index of the card with the highest damage within the players hand
function getHighestCard(playerHand) {
    let currentHighestNumber = playerHand[0].damage
    let highestIndex = 0
    for(let i = 0;i<playerHand.length;i++) {
        if(playerHand[i].damage>currentHighestNumber) {
            currentHighestNumber = playerHand[i].damage
            highestIndex = i
        }
    }
    return highestIndex
}

//construct two new players
let player1 = new Player(shuffledCards)
let player2 = new Player(shuffledCards)
let roundNumber = 1
let roundDisplay = 0

let player1RoundPoints = 0
let player2RoundPoints = 0

//game logic, outer while loop responsible for running the entire game, inner while loop responsible for running single turns
//outler loop (entire game) will end when there arent any cards left
while(shuffledCards.length>0)
{
    let player1Points = 0
    let player2Points = 0
    //inner loop (each turn) will end when there are no more cards left in the player's hand
    while(player1.hand.length>0 && player2.hand.length>0)
    {
        //get both players cards, Player1 will play highest damage, Player2 will pick a card at random
        let player1Card = player1.getPlayCard(getHighestCard(player1.hand))
        let player2Card = player2.getPlayCard(Math.floor(Math.random()*player2.hand.length-1))
        //gameboard
        if(roundDisplay < roundNumber){
            console.log(`\n********************Round********************\n**********************${roundNumber}**********************\n`)
            roundDisplay++
        } else {
            console.log(`\n*********************************************`)
        }
        console.log("Player One plays "+player1Card.name+"!")
        console.log("Player Two plays "+player2Card.name+"!")
        if(player1Card.damage>player2Card.damage){ //Player1 wins the turn if his card's damage value is higher than Player2
            player1Points++
        console.log("Player One wins the turn!")
        }
        else if(player1Card.damage<player2Card.damage){ //Player2 wins if his card's damage is higher
            console.log("Player Two wins the turn!")
            player2Points++
        }
        else
            console.log("Nobody wins the turn...") //If both damage values are equal nobody wins the turn
    }
    if(player1Points>player2Points) { //If Player1 has won more turns than Player2, he wins the round
        console.log("Player One wins the round!")
        player1RoundPoints++
    }
    else if(player2Points>player1Points) { //If Player2 has won more turns, he wins the round
        console.log("Player Two wins the round!")
        player2RoundPoints++
    }
    else
        console.log("Nobody wins the round.")
    //Get 3 new cards for each player and remove them form the deck
    player1.getPlayerHand(shuffledCards)
    player2.getPlayerHand(shuffledCards)
    roundNumber++
}

//end screen
console.log("\n*********************************************\n*********************************************\n")
console.log("Player One has won "+player1RoundPoints+" rounds.")
console.log("Player Two has won "+player2RoundPoints+" rounds.")
//Whoever has won more rounds wins the entire game
if(player1RoundPoints>player2RoundPoints)
    console.log("Player One Wins the Game!")
else if(player2RoundPoints>player1RoundPoints)
    console.log("Player Two Wins the Game!")
else
    console.log("Its a tie!")
console.log("\n*********************************************\n*********************************************\n")
