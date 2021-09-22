var search = document.querySelector(".button-and-search input");
var button = document.querySelector(".button");
var div = document.querySelector(".button-and-search");

search.addEventListener("focus", function(evt) {
    evt.preventDefault();
    button.classList.add("button-red");
    div.classList.add("button-and-search-white");
    });

search.addEventListener("blur", function(evt) {
    evt.preventDefault();
    button.classList.remove("button-red");
    div.classList.remove("button-and-search-white");
    });

button.addEventListener("focus", function() {
    button.classList.add("button-red");
    div.classList.add("button-and-search-white");
    search.focus();
});
