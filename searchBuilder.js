function searchBuilder(){
    console.log("search builder runs")
    if(selectedGenre != "empty"){
        DOMBuilder(searchByGenre(selectedGenre));
    }
}