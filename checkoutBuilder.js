function checkoutBuilder(){
    console.log("checkoutBuilder runs")
    let customerInput = document.getElementById("customerName");
    let titleInput = document.getElementById("titleOfBook");
    let authorInput = document.getElementById("authorOfBook");
    if(customerInput.value.length > 1 && titleInput.value.length > 1 && authorInput.value.length > 1){
        if(document.getElementById("error")){
            document.getElementsByClassName("builder")[0].removeChild(document.getElementById("error"));
        }
        let validTitle = false;
        let validAuthor = false;
        let validCustomer = false;

        let cTitle = "";
        let cAuthor = "";
        let cCustomer = "";

        let bookObj = {};

        for(let i = 0; i < bookArray.length; i++){
            if(bookArray[i].title.toUpperCase() == titleInput.value.toUpperCase()){
                bookObj = bookArray[i];
                validTitle = true;
                cTitle = bookArray[i].title;
                if(bookArray[i].author.toUpperCase() == authorInput.value.toUpperCase()){
                    validAuthor = true;
                    cAuthor = bookArray[i].author;
                }
            }
        }

        for(person in customers){
            let fullName = customers[person].firstName + " " + customers[person].lastName;
            if(fullName.toUpperCase() == customerInput.value.toUpperCase()){
                validCustomer = true;
                cCustomer = person;
            }
        }
        if(validTitle == false){
            console.log("error bad title")
            let error = document.createElement("p");
            error.textContent = "Title does not exist"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
        } else if(validAuthor == false){
            console.log("error bad author")
            let error = document.createElement("p");
            error.textContent = "There is no book by that title with that author"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
        } else if(validCustomer == false){
            console.log("error not a valid customer")
            let error = document.createElement("p");
            error.textContent = "There is no customer by that name"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
        } else if(bookObj.checkOut == true){
            console.log("That Book is checked out")
            let error = document.createElement("p");
            error.textContent = "That book is already checked out"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
        } else{
            checkoutBook(cTitle, cAuthor, cCustomer);
            let log = document.createElement("section");
            log.id = "bookShelfDisplay";
            let p1 = document.createElement("p");
            p1.textContent = "You checked out a book!"
            let p2 = document.createElement("p");

            p2.textContent = `Thank you ${customerInput.value} for checking out ${titleInput.value} by ${authorInput.value}.  Your book will be due back at ${customers[cCustomer].bookshelf[customers[cCustomer].bookshelf.length-1].dueDate}`
            log.appendChild(p1);
            log.appendChild(document.createElement("br"))
            log.appendChild(p2);
            DOMBuilder(log);
        }

        

    } else {
        console.log("error")
        let error = document.createElement("p");
        error.textContent = "Please fill out all sections"
        error.id = "error";
        error.style.color = "red";
        DOMBuilder(error);
    }
}