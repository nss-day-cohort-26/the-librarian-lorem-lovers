
//Library Card Generator
//Seth Dana

const libraryCards = Object.create({},{
    currentCardNumber: {
        writable: true,
        enumerable: true,
        value: 1,
    },
    generateCard: {
        writable: false,
        enumerable: false,
        //cardObject is the location of where to place the library card number generated ie. customers.seth.libraryCard
        value: function(cardObject){
            
           return cardObject =libraryCards.currentCardNumber++
        }
    },
})