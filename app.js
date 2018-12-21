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
        Array.prototype.randomElement = function() {
            // console.log(this[Math.floor(Math.random() * this.length)])
            return this[Math.floor(Math.random() * this.length)]
        }
        let randomDraw = player1.cards.randomElement()


    }

    /*removePlayedCard: function(cardThatWasPlayed){
        //do something with that

    }*/
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










        player2.draw3Cards()
        let player2sRandomCard = player2.playRandom()
        console.log(player2.cards)

        console.log(player2sRandomCard)
        console.log(player2.cards.indexOf(player2sRandomCard))

        player2.removePlayedCard(player2sRandomCard)

        console.log(player2.cards)

        