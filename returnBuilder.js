function returnBuilder(){
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

        for(person in customers){
            let fullName = customers[person].firstName + " " + customers[person].lastName;
            if(fullName.toUpperCase() == customerInput.value.toUpperCase()){
                validCustomer = true;
                cCustomer = person;
                for(let i = 0; i < customers[person].bookshelf.length; i++){
                    if(customers[person].bookshelf[i].title.toUpperCase() == titleInput.value.toUpperCase()){
                        validTitle = true;
                        cTitle = customers[person].bookshelf[i].title;
                        bookObj= customers[person].bookshelf[i];
                        if(customers[person].bookshelf[i].author.toUpperCase() == authorInput.value.toUpperCase()){
                            validAuthor = true;
                            cAuthor = customers[person].bookshelf[i].author;
                        }
                    }
                }
            }
        }

        

        
         if(validCustomer == false){
            console.log("error not a valid customer")
            let error = document.createElement("p");
            error.textContent = "There is no customer by that name"
            error.id = "error";
            error.style.color = "red";
            DOMBuilder(error);
         } else if (validTitle == false){
            console.log("error bad title")
            let error = document.createElement("p");
            error.textContent = "Title does not exist in bookshelf"
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
        } else {
            returnBook(cTitle, cAuthor, cCustomer);

            let log = document.createElement("section");
            log.id = "bookShelfDisplay";
            let p1 = document.createElement("p");
            p1.textContent = "You returned a book!"
            let p2 = document.createElement("p");
            p2.textContent = `Thank you ${customerInput.value} for returning ${titleInput.value} by ${authorInput.value}.`
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