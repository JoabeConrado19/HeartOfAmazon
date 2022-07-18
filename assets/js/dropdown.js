let mobileMenu = document.querySelector(".menu-toggle");
let navList = document.querySelector(".nav-list");
let Categorias = document.querySelector(".drop");
let Destaques = document.querySelector(".drop2");
let ShoppingCartOpen = document.querySelector(".shoppingCartOpen");
let ShoppingCart = document.querySelector(".shoppingCart");



function click (){
    navList.classList.toggle("active")
    ShoppingCart.classList.remove("shoppingCartActive")
}
function click2 (){
    Categorias.classList.toggle("dropdown")
}
function click3 (){
    Destaques.classList.toggle("dropdown")
}

function click4 (){
    ShoppingCart.classList.toggle("shoppingCartActive")
    navList.classList.remove("active")
}

mobileMenu.addEventListener("click", click)
Categorias.addEventListener("click", click2)
Destaques.addEventListener("click", click3)
ShoppingCartOpen.addEventListener("click", click4)