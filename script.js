let mobileMenu = document.querySelector(".menu-toggle");
let navList = document.querySelector(".nav-list");
let navTextLi = document.querySelector(".nav-text-li");

function click (){
    navList.classList.toggle("active")
}
mobileMenu.addEventListener("click", click)