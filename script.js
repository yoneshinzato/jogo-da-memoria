const cards = document.querySelectorAll('.card')

function flipCard() {
    this.classList.toggle('flip') //this é o contexto da função
}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
})