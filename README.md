# Pokémon!
![pokemon cards](https://i.ytimg.com/vi/5pDthGSHo58/maxresdefault.jpg)
Each of us will make a game where two players play a game of "Pokémon" against each other. We'll create two "computer" opponents with AI. Running the program will run through one session of the game, logging how the game progressess from beginning to end.  


## The Rules
 - There is a deck of 18 cards. Each card has a `name` value and a `damage` value. (This data will be supplied as an array of objects)

 - Each player is dealt three cards randomly from the deck into their hand. 

 - Each player will choose to play a card from their hand: 
   - The first player will choose whichever card in their hand has the highest damage value
   - The second player will choose a card at random

 - The player whose card has the higher `damage` value wins the turn.  

 - This will repeat for two more turns, until there are no more cards left in each player's hand.

 - When the players run out of cards in their hand, the round ends.

 -  Whoever has the most points at the end of the round wins the round. 

 - This repeats for two more rounds, until the deck is empty and all cards have been played. 

- Whoever has won the most rounds wins the game. 


## The View
The following should be logged to the console 
 - Per round:
   - The round number
   - Each player's hand
   - Per turn:
     - Each player's chosen card
     - Who won the turn
   - Who won the round
   - Total Scores
Then, it should log at the end of the game which player won the game. 

## The Array
```
[
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
```