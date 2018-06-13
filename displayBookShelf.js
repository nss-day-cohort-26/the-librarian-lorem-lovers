function displayBookShelf(){
    let input = document.getElementById("customerName").value;
    console.log("displayBookShelf runs")
    console.log(input)
    let targetCustomer = {};
    if(input.length < 2){
        console.log("Please fill out name")
        let error = document.createElement("p");
        error.textContent = "Please fill out name"
        error.id = "error";
        error.style.color = "red";
        DOMBuilder(error);
    } else {
        let validName = false;
        for(person in customers){
            let fullName = customers[person].firstName + " " + customers[person].lastName;
            if(fullName.toUpperCase() == input.toUpperCase()){
                validName = true;
                targetCustomer = customers[person];
            }
        }
        if(validName == false){
            console.log("Not a valid name")
        let error = document.createElement("p");
        error.textContent = "Please enter a valid name"
        error.id = "error";
        error.style.color = "red";
        DOMBuilder(error);
        } else {
            if(document.getElementById("bookShelfDisplay") != undefined){
                document.getElementsByClassName("builder")[0].removeChild(document.getElementById("bookShelfDisplay"));
            }
            let newSection = document.createElement("section");
            newSection.id = "bookShelfDisplay";
            for(let i = 0; i < targetCustomer.bookshelf.length; i++){
                let newBook = document.createElement("p");
                let bookTitleAndAuthor = targetCustomer.bookshelf[i].title + " by " + targetCustomer.bookshelf[i].author;
                newBook.textContent = bookTitleAndAuthor;
                newSection.appendChild(newBook);
            }
            console.log(newSection)
            DOMBuilder(newSection);
        }
    }
}