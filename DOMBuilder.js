function DOMBuilder(element){
    if(document.getElementById("searchSection") != null){
        document.getElementById("searchSection").innerHTML = ""
        document.getElementById("searchSection").appendChild(element);
    } else {
        document.getElementsByClassName("builder")[0].appendChild(element);
    }
}