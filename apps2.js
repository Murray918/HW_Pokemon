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
    { name: "Weedle", damage: 40 }
]

let random = function(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
let roundCounter = 1
let hand = []
let gameFeild1 = []
let gameFeild2 = []
let game = {
    //Deck cards sorter
    //pushing to the global hand 
    dealCard: function(card) {
        for (let i = 0; i <= 17; i++) {
            let x = random(card.length - 1)
            let p = card.splice(x, 1)
            hand.push.apply(hand, p)
        }
    },

    //must pass in player1 as a parameter
    fighter1: function(x) {
        gameFeild1.push(x.hand[random(x.hand.length)])
        x.hand.pop()
        //return console.log('player1 played ' + gameFeild1[0])
    },



    //must pass player2 as x
    fighter2: function(x) {
        gameFeild2.push(x.hand[random(x.hand.length)])
        x.hand.pop()
        /*return console.log('player2 played ' + gameFeild2[0])*/

    },
    //pass player1 and player 2 as x and y
    feildBattle: function(x, y) {
        if (gameFeild1[0].damage > gameFeild2[0].damage) {
            x.score++
            return console.log("player1 won")
        } else if (gameFeild2[0].damage > gameFeild1[0].damage) {
            y.score++
            return console.log("player2 won")
        } else {
            return console.log('Tie')
        }

    }

}

let round = function() {
    console.log('Round ' + roundCounter)
    game.fighter2(player2)
    game.fighter1(player1)
    game.feildBattle(player1, player2)
    roundCounter += 1
    gameFeild1 = []
    gameFeild2 = []
}


class player {
    constructor() {
        this.score = 0
        this.hand = []
        this.roundScore = 0
    }
    // player card sorter from global hand
    //x represents random number
    //p is postion of splice
    //pushs to the player hand
    playerHand() {
        while (this.hand.length < 3) {
            let x = random(17)
            let p = deck.splice(x, 1)
            this.hand.push.apply(this.hand, p)
        }

    }
}


let player1 = new player()
let player2 = new player()

player1.playerHand()
player2.playerHand()



let turn = function() {
    round()
    round()
    round()
    console.log('player1 has ' + player1.score, 'player2 has ' + player2.score)
    if (player1.score > player2.score) {
        player1.roundScore += 1
    } else if (player2.score > player1.score) {
        player2.roundScore += 1
    } else {
        console.log('TURN TIE')
    }
    roundCounter = 1
}


let mainGame = function() {
    console.log('Turn 1')
    turn()
    player1.playerHand()
    player2.playerHand()
    console.log('Turn 2')
    turn()
    player1.playerHand()
    player2.playerHand()
    console.log('Turn 3')
    turn()
    if(player1.roundScore > player2.roundScore){
      console.log('PLAYER 1 WON !!')
    }else if(player2.roundScore > player1.roundScore){
      console.log('PLAYER 2 WON!!')
    } else{
      console.log('TIE BOTH ARE LOSERS LUL!!!!')
    }
    
}

mainGame()
/*

console.log(hand)
console.log(player1)
*/






/*fighter1: function(player) {
      for(let i= 0; player.hand.length > i; i++){
        if(player.hand[0].damage >= player.hand[1].damage || player.hand[2].damage){
          gameFeild.push(player.hand[0])
          player.hand.pop()
        } else if(player.hand[1].damage >= player.hand[2].damage || player.hand[0]){
          gameFeild.push(player.hand[1])
          player.hand.pop()
        } else{
          gameFeild.push(player.hand[2])
          player.hand.pop()
        }
      }*/

      