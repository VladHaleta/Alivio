let tgl= document.querySelector(".burger-tgl");
let burger= document.querySelector(".header-navigation");
let burgerSignIn= document.querySelector(".header--item");

tgl.addEventListener("click", blockToggle);

function blockToggle () {
    burger.classList.toggle("header-navigation-burger");
    burgerSignIn.classList.toggle("header--item-burger");
}