function expand(id){
    console.log("bada bing boom");
    if (id.classList.contains("open")) {
        id.classList.add("closed");
        id.classList.remove("open");
    }
    else {
        id.classList.add("open");
        id.classList.remove("closed");
    }
}