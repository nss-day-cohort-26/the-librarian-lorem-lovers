var selectedGenre = "empty";

function genreSelector(e){
    if(e.target.classList == "menu-item"){
        selectedGenre = e.target.id;
        document.getElementsByClassName("dropbtn")[0].textContent = e.target.id;
    }
}