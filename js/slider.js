var btnright2 = document.querySelector(".image-4-2 .btn-rigth");
var btnleft2 = document.querySelector(".image-4-2 .btn-left");
var btnright = document.querySelector(".image-4 .btn-rigth");
var btnleft = document.querySelector(".image-4 .btn-left");
var btnright3 = document.querySelector(".image-4-3 .btn-rigth");
var btnleft3 = document.querySelector(".image-4-3 .btn-left");
var image42 = document.querySelector(".image-4-2");
var image4 = document.querySelector(".image-4");
var image43 = document.querySelector(".image-4-3");

btnright2.addEventListener("click", function(evt) {
    evt.preventDefault();
    image42.classList.add("icon-4-off");
    image4.classList.remove("icon-4-off");
});
btnleft2.addEventListener("click", function(evt) {
    evt.preventDefault();
    image42.classList.add("icon-4-off");
    image43.classList.remove("icon-4-off");
});

btnright.addEventListener("click", function(evt) {
    evt.preventDefault();
    image4.classList.add("icon-4-off");
    image43.classList.remove("icon-4-off");
});
btnleft.addEventListener("click", function(evt) {
    evt.preventDefault();
    image4.classList.add("icon-4-off");
    image42.classList.remove("icon-4-off");
});

btnright3.addEventListener("click", function(evt) {
    evt.preventDefault();
    image43.classList.add("icon-4-off");
    image42.classList.remove("icon-4-off");
});
btnleft3.addEventListener("click", function(evt) {
    evt.preventDefault();
    image43.classList.add("icon-4-off");
    image4.classList.remove("icon-4-off");
});