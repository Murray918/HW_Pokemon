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
    { name: "Weedle", damage: 40 }
]


//functions

//Selects random card from deck of Pokemon cards
let random = function(max) {
    return Math.floor(Math.random() * Math.floor(max))
}


let randomCard = function() {
    let randomCardIndex = Math.floor(Math.random() * pokemonCards.length)
    return pokemonCards.splice(randomCardIndex, 1)[0]

}




//Conditions
//Automatically plays player1 highest damage card


//return values 



let player1 = {
    name: "Player 1",
    cards: [],
    draw3Cards: function(deck) {
        for (i = 0; i < 3; i++) {
            let card = randomCard()
            this.cards.push(card)
        }
    },
    /*playHighestDamage: function() {

        if (player1.cards[0].damage > player1.cards[2].damage)
            return (player1.cards[0])
          
        else if (player1.cards[1].damage > player1.cards[0].damage && player1.cards[2].damage)
            return (player1.cards[1])
          
        else(player1.cards[2].damage > player1.cards[1].damage && player1.cards[0].damage)
        return (player1.cards[2])*/
    playRandom: function() {
         let randomCard = this.cards[Math.floor(Math.random() * this.cards.length)]
            return randomCard

    },

     removePlayedCard: function(value) {
            let index = this.cards.indexOf(value)
             return this.cards.splice(index, 1)
             }

        }







let player2 = {
        name: "Player 2",
        cards: [],
        draw3Cards: function(deck) {
            for (i = 0; i < 3; i++) {
                let card = randomCard()
                this.cards.push(card)

            }
        },
        playRandom: function() {
            
            // Array.prototype.randomElement = function() {

            //     console.log(player2.cards.indexOf(this [Math.floor(Math.random() * this.length)]))
            //console.log(this.cards)
            let randomCard = this.cards[Math.floor(Math.random() * this.cards.length)]
            return randomCard




        },
         removePlayedCard: function(value) {
            let index = this.cards.indexOf(value)
             return this.cards.splice(index, 1)
             }

        }


        let p1scoreboard = 0
        let p2scoreboard = 0



        let scoreCompare = function(){
            
            if(player1sRandomCard.damage > player2sRandomCard.damage)
                //console.log("PLAYER 1 WINS")
                p1scoreboard += 1
            
            else
                (player2sRandomCard.damage > player1sRandomCard.damage)
                console.log("PLAYER 2 WINS")
                p2scoreboard += 1
            
        }



        let player1sRandomCard = player1.playRandom()
        let player2sRandomCard = player2.playRandom()

        
let hash = "############################################################################################"
        
        let Round1 = function(){
            
            console.log("ROUND 1")
            player1.draw3Cards()
            console.log("Player 1 DREW \n ", player1.cards)
            console.log(hash)
            player2.draw3Cards()
            console.log("Player 2 DREW \n ", player2.cards)
            console.log(hash)
            player1.playRandom()
            console.log("Player 1 has played \n ", player1sRandomCard = player1.playRandom())
            player2.playRandom()
            console.log("Player 2 has played \n ", player2sRandomCard = player2.playRandom())

            player1.removePlayedCard(player1sRandomCard)
            player2.removePlayedCard(player2sRandomCard)
            console.log(hash)
            
            console.log("Player 1 score:",p1scoreboard)
            console.log("Player 2 score:",p2scoreboard)
            console.log(hash)
            console.log("Player 1 remaining cards \n", player1.cards)
            console.log("PLayer 2 remaining cards \n", player2.cards)
            console.log(hash)

            //round 2

            console.log("ROUND 2")
            player1.playRandom()
            console.log("Player 1 has played \n ", player1sRandomCard = player1.playRandom())
            player1.removePlayedCard(player1sRandomCard)
            player2.playRandom()
            console.log("Player 2 has played \n ", player2sRandomCard = player2.playRandom())
            player2.removePlayedCard(player2sRandomCard)
            console.log(hash)
           
            console.log("Player 1 score:",p1scoreboard)
            console.log("Player 2 score:",p2scoreboard)
            console.log(hash)
            console.log("Player 1 remaining cards \n", player1.cards)
            console.log("PLayer 2 remaining cards \n", player2.cards)

            //round 3
            console.log("ROUND 3")
            player1.playRandom()
            console.log("Player 1 has played \n ", player1sRandomCard = player1.playRandom())
            player1.removePlayedCard(player1sRandomCard)
            player2.playRandom()
            console.log("Player 2 has played \n ", player2sRandomCard = player2.playRandom())
            player2.removePlayedCard(player2sRandomCard)
            console.log(hash)
           
            console.log("Player 1 score:",p1scoreboard)
            console.log("Player 2 score:",p2scoreboard)
            console.log(hash)
            console.log("Player 1 remaining cards \n", player1.cards)
            console.log("PLayer 2 remaining cards \n", player2.cards)
        }
        // while loop - while players score is less than 3 keep playing

        Round1()


       

       
