let listAcessorios = [];
let listArtesanato = [];
let listProdutosNaturais = [];
let listRedes = [];
let listLicores = [];

function separar(){
    for(let i = 0; i<products.length; i++){
        if(products[i].section == "Acessorios"){
            listAcessorios.push(products[i])
        }
        if(products[i].section == "Artesanato"){
            listArtesanato.push(products[i])
        }
        if(products[i].section == "ProdutosNaturais"){
            listProdutosNaturais.push(products[i])
        }
        if(products[i].section == "Redes"){
            listRedes.push(products[i])
        }
        if(products[i].section == "Licores"){
            listLicores.push(products[i])
        }
    }
}

separar()

let sectionAcessorios = document.getElementsByClassName('acessorio')[0]
let sectionArtesanato = document.getElementsByClassName('artesanato')[0]
let sectionProdutosNaturais = document.getElementsByClassName('produtosNaturais')[0]
let sectionRedes = document.getElementsByClassName('redes')[0]
let sectionLicores = document.getElementsByClassName('licores')[0]
let sectionOutros = document.getElementsByClassName('outros')[0]
let sectionPesquisa = document.getElementsByClassName('pesquisa')[0]

function listarProdutos(products){
for(let i = 0; i< products.length; i++){

        let li = document.createElement("li")
        li.classList.add("product-card")
        if(products[i].section == "Acessorio"){
        sectionAcessorios.appendChild(li)}
        else if(products[i].section == "Artesanato"){
        sectionArtesanato.appendChild(li)}
        else if(products[i].section == "Produtos Naturais"){
        sectionProdutosNaturais.appendChild(li)}
        else if(products[i].section == "Redes"){
        sectionRedes.appendChild(li)}
        else if(products[i].section == "Licores"){
        sectionLicores.appendChild(li)}
        else if(products[i].section == "pesquisa"){
            sectionPesquisa.appendChild(li)}
        else{
        sectionOutros.appendChild(li)
        }
        let div = document.createElement("div")
        div.classList.add("product-img-container")
        li.appendChild(div)
        let span = document.createElement("span")
        if(products[i].stars > 4.5){
            span.classList.add("badge")
        }
        else{
            span.classList.add("no-badge")
        }
        span.innerText = "Destaque"
        div.appendChild(span)
        let img = document.createElement("img")
        if(products[i].imageSize == 1){
            img.classList.add("product-img")
        }
        if(products[i].imageSize == 2){
            img.classList.add("product-img2")
        }
        if(products[i].imageSize == 3){
            img.classList.add("product-img3")
        }
        if(products[i].imageSize == 4){
            img.classList.add("product-img4")
        }
        if(products[i].imageSize == 5){
            img.classList.add("product-img5")
        }
        else{
            img.classList.add("product-imgAuto")
        }
        img.src = products[i].image
        div.appendChild(img)
        let div2 = document.createElement("div")
        div2.classList.add("product-details-container")
        li.appendChild(div2)
        let span2 = document.createElement("span")
        span2.classList.add("category")
        span2.innerText = products[i].categoria
        div2.appendChild(span2)
        let h2 = document.createElement("h2")
        h2.innerText = products[i].nome
        div2.appendChild(h2)
        let p = document.createElement("p")
        p.classList.add("product-p")
        p.innerText = products[i].description
        div2.appendChild(p)
        let div3 = document.createElement("div")
        div3.classList.add("stars-container")
        div2.appendChild(div3)
        let star1 = document.createElement("i")
        let star2 = document.createElement("i")
        let star3 = document.createElement("i")
        let star4 = document.createElement("i")
        let star5 = document.createElement("i")
        let span3 = document.createElement("span")
        span3.innerText = "("+`${products[i].stars}`+")"
        star1.classList.add("fa")
        star1.classList.add("fa-star")
        star2.classList.add("fa")
        star2.classList.add("fa-star")
        star3.classList.add("fa")
        star3.classList.add("fa-star")
        star4.classList.add("fa")
        star4.classList.add("fa-star")
        star5.classList.add("fa")
        star5.classList.add("fa-star")
        
        if(products[i].stars < 2){
            div3.appendChild(star1)
            div3.appendChild(span3) 
            div3.appendChild(span3)       
      
        }
        if(products[i].stars >= 2 && products[i].stars < 3){
            div3.appendChild(star1)
            div3.appendChild(star2)
            div3.appendChild(span3)       

        }
        if(products[i].stars >= 3 && products[i].stars < 4){
            div3.appendChild(star1)
            div3.appendChild(star2)
            div3.appendChild(star3)
            div3.appendChild(span3)       

        }
        if(products[i].stars >= 4 && products[i].stars < 5){
            div3.appendChild(star1)
            div3.appendChild(star2)
            div3.appendChild(star3)
            div3.appendChild(star4)
            div3.appendChild(span3)       

        }
        if(products[i].stars == 5){
            div3.appendChild(star1)
            div3.appendChild(star2)
            div3.appendChild(star3)
            div3.appendChild(star4)
            div3.appendChild(star5)
            div3.appendChild(span3)       
        }
    let div4 = document.createElement("div")
    div4.classList.add("product-price")
    div2.appendChild(div4)
    let span4 = document.createElement("span")
    span4.innerText ="R$"+`${products[i].precoSemDesconto}`
    if(products[i].precoSemDesconto > 0){
    div4.appendChild(span4)}
    let p2 = document.createElement("p")
    p2.innerText = "R$"+`${products[i].precoAtual}`
    div4.appendChild(p2)
    let iShop = document.createElement("i")
    iShop.classList.add("fa")
    iShop.classList.add("fa-shopping-cart")
    iShop.id = `${products[i].id}`
    iShop.classList.add("product-cart")
    div4.appendChild(iShop)
    let iHeart = document.createElement("i")
    iHeart.classList.add("fa")
    iHeart.classList.add("fa-heart")
    iHeart.classList.add("product-heart")
    iHeart.id = `${products[i].id}`
    div4.appendChild(iHeart)

    }

    

    }
    listarProdutos(products)

    // Coração mudar de cor no click
    let addHeart = document.querySelectorAll(".product-heart")
    for(let i = 0; addHeart.length; i++){
        function click (){     
       addHeart[i].classList.toggle("product-heart-active")
        }
        addHeart[i].addEventListener("click", click)
    }
    

