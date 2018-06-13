console.log("Welcome to the library")

customers.jake.libraryCard = libraryCards.generateCard()
customers.brett.libraryCard = libraryCards.generateCard()
customers.shu.libraryCard = libraryCards.generateCard()

customers.jake.bookshelf.push(bookArray[5]);

for(let i = 0; i < 8; i++){
    console.log( document.getElementsByClassName("menu-item")[i])
    document.getElementsByClassName("menu-item")[i].addEventListener("click", genreSelector)
    document.getElementsByClassName("menu-item")[i].addEventListener("click", searchBuilder)
}

document.getElementById("checkOut").addEventListener("click", checkoutBuilder)

document.getElementById("displayBookShelf").addEventListener("click", displayBookShelf)