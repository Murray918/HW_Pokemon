var playerOne.hand = [{ name: "Bulbasaur", damage: 60 }, 
  { name: "Caterpie", damage: 40 }, 
  { name: "Charmander", damage: 60 }, 
  { name: "Clefairy", damage: 50 }, ];
playerOne.hand.sort(compareNumbers(playerOne.hand[0].damage,playerOne.hand[1].damage){
                   return a-b
                    });
console.log(playerOne.hand);