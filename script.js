let mobMenu = document.querySelector(".menu");
let burger = document.querySelector(".fa-bars");
let xMark = document.querySelector(".fa-circle-xmark");


burger.addEventListener("click", () => {
    mobMenu.classList.add("diss_app");
    burger.style.display = "none";
    xMark.style.display = "block";
});

xMark.addEventListener("click", () => {
    mobMenu.classList.remove("diss_app");
    xMark.style.display = "none";
    burger.style.display = "block";
});

