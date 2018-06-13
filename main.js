console.log("Welcome to the library")

for(let i = 0; i < 8; i++){
    console.log( document.getElementsByClassName("menu-item")[i])
    document.getElementsByClassName("menu-item")[i].addEventListener("click", genreSelector)
    document.getElementsByClassName("menu-item")[i].addEventListener("click", searchBuilder)
}

document.getElementById("checkOut").addEventListener("click", checkoutBuilder)