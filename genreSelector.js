var selectedGenre = "empty";

function genreSelector(e){
    if(e.target.classList == "menu-item"){
        selectedGenre = e.target.id;
        let genreName = selectedGenre.slice(0, 1).toUpperCase() + selectedGenre.slice(1, selectedGenre.length)
        document.getElementsByClassName("dropbtn")[0].textContent = genreName;
        console.log(selectedGenre)
    }
}