//Book Checkout Function
//Seth Dana

const returnBook = (titleOfBook, authorOfBook, custName) => {
   //check to see if book is checked out
   //make sure book is checked out by customer
   //change boolean to false
   //remove from bookshelf
    let currentBook = customers[custName].bookshelf.filter((value) => {
        return (titleOfBook === value.title && authorOfBook === value.author)
    })
    console.log(currentBook)
    switch (currentBook[0].checkedOut){
        
        case (true):
            let dateNow = moment()
            if (moment().isAfter(currentBook[0].dueDate) ){
                alert("You owe $5")
            
            }
            currentBook[0].checkedOut = false
            customers[custName].bookshelf.pop(currentBook[0])
            alert("Returned your book")
            break
            // let custName = document.querySelector("#customerName").value
    }
}