var btnwriteus = document.querySelector(".btn-wrire-us");
var writeus = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var map = document.querySelector(".map");
var modalmap = document.querySelector(".modal-map");
var mapclose = document.querySelector(".map-modal-close");
var mapimg = document.querySelector(".modal-map img");


btnwriteus.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeus.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeus.classList.remove("modal-show");
});


map.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapimg.classList.add("map-img-none");
    modalmap.classList.add("modal-show");
});

mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalmap.classList.remove("modal-show");
});

 window.addEventListener("keydown", function (evt) {
                if (evt.keyCode === 27) {
                    if (writeus.classList.contains("modal-show")) {
                        evt.preventDefault();
                        writeus.classList.remove("modal-show");
                    }
                    if ( modalmap.classList.contains("modal-show")) {
                        evt.preventDefault ();
                        modalmap.classList.remove("modal-show");
                    }
                }
            });
