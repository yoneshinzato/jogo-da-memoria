const cards = document.querySelectorAll('.card')
let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false

function flipCard() {
    if(lockBoard) return
    if(this === firstCard) return

    this.classList.add('flip') //this é o contexto da função
    if(!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this //igual ao elemento clicado, o card
        return
    }

    secondCard = this
    hasFlippedCard = false //para zerar
    checkForMatch() //checa se forma um par
}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards() //se iguais, desabilita cards
        return
    }
    unflipCards() //se diferentes, 'desvira' os cards pro jogo continuar
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

//setTimeout
function unflipCards() {
    lockBoard = true

    setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        
        resetBoard()
    },1500)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()*12)
        card.style.order = randomPosition
    })
})() //immediately invoked function




cards.forEach((card) => {
    card.addEventListener('click', flipCard)
})