document.getElementById('gameBoard').addEventListener('click', playerChoice)

const image = document.querySelector('img')

class Player {
    constructor(symbol) {
        this.symbol = symbol
    }
}

class Dominos extends Player {
    constructor(symbol) {
        super(symbol)
    }
    playerChoice() {
        image.src = "../images/domino-s-pizza.jpeg"
    }
}

class PapaJohns extends Player {
    constructor(symbol) {
        super(symbol)
    }
    playerChoice() {
    image.src = "../images/Papa-Johns-Pizza-Logo-1995.png"
    }
}