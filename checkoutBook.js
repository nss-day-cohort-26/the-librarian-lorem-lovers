//Book Checkout Function
//Seth Dana

const checkoutBook = (titleOfBook, authorOfBook, custName) => {
    //locate book to be checked out
    //determine if book is already checked out
    //if book is not checked out, add book to customers bookshelf
    //if book is checked out, say so.

    //find book index in bookArray
    let currentBook = bookArray.filter((value) => {
        return (titleOfBook === value.title && authorOfBook === value.author)
    })
    console.log(currentBook)
    switch (currentBook[0].checkedOut){
        case (true):
            alert("I'm sorry, that book is currently checked out. Please make another selection")
            break
        case (false):
            currentBook[0].checkedOut = true
            customers[custName].bookshelf.push(currentBook[0])
            alert("Added book to your bookshelf")
            break
            // let custName = document.querySelector("#customerName").value
    }
}