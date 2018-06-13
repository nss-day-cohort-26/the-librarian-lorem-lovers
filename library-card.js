const customers = {
    seth: {
        firstName: "Seth",
        lastName: "Dana",
        libraryCard: 0,
        favoriteGenre: "Sci-Fi",
    },

    test: {
        firstName: "test",
        libraryCard: 0,
    }
}
//Library Card Generator

const libraryCards = Object.create({},{
    currentCardNumber: {
        writable: true,
        enumerable: true,
        value: 1,
    },
    generateCard: {
        writable: false,
        enumerable: false,
        value: function(cardObject){
            
           return cardObject =libraryCards.currentCardNumber++
        }
    },
})


customers.seth.libraryCard = libraryCards.generateCard(customers.seth.libraryCard)
customers.test.libraryCard = libraryCards.generateCard(customers.test.libraryCard)

console.log(customers.seth)
console.log(customers.test)