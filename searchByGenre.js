function searchByGenre(genreQuery){
    let section = document.createElement("section");
    for(let i = 0; i < bookArray.length; i++){
        if(bookArray[i].genre.toUpperCase() == genreQuery.toUpperCase()){
            let newP = document.createElement("p");
            newP.textContent = `${bookArray[i].title} by ${bookArray[i].author}`
            section.appendChild(newP);
            section.id = "searchSection"
        }
    }
    console.log(section);
    return section;
}

searchByGenre("horror");