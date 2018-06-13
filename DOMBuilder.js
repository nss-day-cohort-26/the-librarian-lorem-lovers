function DOMBuilder(element){
    document.getElementsByClassName("builder")[0].appendChild(element);
    if(document.getElementById("welcome") != undefined){
        document.getElementsByClassName("builder")[0].document.getElementById("welcome");
    }

    if(document.getElementById("error")){
        document.getElementsByClassName("builder")[0].removeChild(document.getElementById("error"));
    }
    if(element.id == "error"){
        document.getElementById("errorSection").appendChild(element);
    }
    if(element.id == "searchSection"){
        if(document.getElementById("searchSection") != undefined){
            document.getElementById("searchSection").innerHTML = ""
            document.getElementById("searchSection").appendChild(element);
        } else {
            document.getElementsByClassName("builder")[0].appendChild(element);
        }
    }
    if(element.id == "bookShelfDisplay"){
        document.getElementsByClassName("builder")[0].appendChild(element);
    }
}
