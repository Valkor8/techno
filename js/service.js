var btndelivery = document.querySelector(".btn-delivery");
var btnguarantee = document.querySelector(".btn-guarantee");
var btncredit = document.querySelector(".btn-credit");

var delivery = document.querySelector(".delivery");
var guarantee = document.querySelector(".guarantee");
var credit = document.querySelector(".credit");


btndelivery.addEventListener("click", function(evt) {
    evt.preventDefault();
    btndelivery.classList.add("service-btn-active");
    btnguarantee.classList.remove("service-btn-active");
    btncredit.classList.remove("service-btn-active");

    delivery.classList.remove("service-off");
    guarantee.classList.add("service-off");
    credit.classList.add("service-off");
});

btnguarantee.addEventListener("click", function(evt) {
    evt.preventDefault();
    btnguarantee.classList.add("service-btn-active");
    btndelivery.classList.remove("service-btn-active");
    btncredit.classList.remove("service-btn-active");

    delivery.classList.add("service-off");
    guarantee.classList.remove("service-off");
    credit.classList.add("service-off");
});

btncredit.addEventListener("click", function(evt) {
    evt.preventDefault();
    btncredit.classList.add("service-btn-active");
    btndelivery.classList.remove("service-btn-active");
    btnguarantee.classList.remove("service-btn-active");

    delivery.classList.add("service-off");
    guarantee.classList.add("service-off");
    credit.classList.remove("service-off");
});
