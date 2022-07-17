let mobileMenu = document.querySelector(".menu-toggle");
let navList = document.querySelector(".nav-list");
let Categorias = document.querySelector(".drop");
let Destaques = document.querySelector(".drop2");


function click (){
    navList.classList.toggle("active")
}
function click2 (){
    Categorias.classList.toggle("dropdown")
}
function click3 (){
    Destaques.classList.toggle("dropdown")
}
mobileMenu.addEventListener("click", click)
Categorias.addEventListener("click", click2)
Destaques.addEventListener("click", click3)