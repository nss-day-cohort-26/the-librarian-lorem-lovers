function DOMBuilder(element){
    document.getElementsByClassName("builder")[0].innerHTML = "";

    let errorSection = document.createElement("section");
    errorSection.id = "errorSection";
    document.getElementsByClassName("builder")[0].appendChild(errorSection);

    document.getElementsByClassName("builder")[0].appendChild(element);
    
    if(element.id == "error"){
        document.getElementById("errorSection").appendChild(element);
    }
    if(element.id == "searchSection"){
            document.getElementsByClassName("builder")[0].appendChild(element);
    }

    if(element.id == "bookShelfDisplay"){
        document.getElementsByClassName("builder")[0].appendChild(element);
    }
}
