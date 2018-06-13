//Book Checkout Function
//Seth Dana

const checkoutBook = (titleOfBook, authorOfBook, custName) => {
    //locate book to be checked out
    //determine if book is already checked out
    //if book is not checked out, add book to customers bookshelf
    //if book is checked out, say so.

    if (customers[custName].libraryCard > 0) {

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
                let dueDate = moment().add(14, 'days').calendar()
                currentBook[0].dueDate = dueDate
                customers[custName].bookshelf.push(currentBook[0])
                alert("Added book to your bookshelf")
                break
                // let custName = document.querySelector("#customerName").value
        }
    }
    else {
        alert("You're not a library member! Please apply for a library card")
    }
}