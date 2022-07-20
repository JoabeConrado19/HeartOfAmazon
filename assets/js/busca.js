let inputBusca = document.querySelector(".inputPesquisa")
let btnBusca = document.querySelector(".btnPesquisa")


function listarPesquisa(A){
    for(let i = 0; i< A.length; i++){
    
            let li = document.createElement("li")
            li.classList.add("product-card")
            
            sectionPesquisa.appendChild(li)

            let div = document.createElement("div")
            div.classList.add("product-img-container")
            li.appendChild(div)
            let span = document.createElement("span")
            if(A[i].stars > 4.5){
                span.classList.add("badge")
            }
            else{
                span.classList.add("no-badge")
            }
            span.innerText = "Destaque"
            div.appendChild(span)
            let img = document.createElement("img")
            if(A[i].imageSize == 1){
                img.classList.add("product-img")
            }
            if(A[i].imageSize == 2){
                img.classList.add("product-img2")
            }
            if(A[i].imageSize == 3){
                img.classList.add("product-img3")
            }
            if(A[i].imageSize == 4){
                img.classList.add("product-img4")
            }
            if(A[i].imageSize == 5){
                img.classList.add("product-img5")
            }
            else{
                img.classList.add("product-imgAuto")
            }
            img.src = A[i].image
            div.appendChild(img)
            let div2 = document.createElement("div")
            div2.classList.add("product-details-container")
            li.appendChild(div2)
            let span2 = document.createElement("span")
            span2.classList.add("category")
            span2.innerText = A[i].categoria
            div2.appendChild(span2)
            let h2 = document.createElement("h2")
            h2.innerText = A[i].nome
            div2.appendChild(h2)
            let p = document.createElement("p")
            p.classList.add("product-p")
            p.innerText = A[i].description
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
            span3.innerText = "("+`${A[i].stars}`+")"
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
            
            if(A[i].stars < 2){
                div3.appendChild(star1)
                div3.appendChild(span3) 
                div3.appendChild(span3)       
          
            }
            if(A[i].stars >= 2 && A[i].stars < 3){
                div3.appendChild(star1)
                div3.appendChild(star2)
                div3.appendChild(span3)       
    
            }
            if(A[i].stars >= 3 && A[i].stars < 4){
                div3.appendChild(star1)
                div3.appendChild(star2)
                div3.appendChild(star3)
                div3.appendChild(span3)       
    
            }
            if(A[i].stars >= 4 && A[i].stars < 5){
                div3.appendChild(star1)
                div3.appendChild(star2)
                div3.appendChild(star3)
                div3.appendChild(star4)
                div3.appendChild(span3)       
    
            }
            if(A[i].stars == 5){
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
        span4.innerText ="R$"+`${A[i].precoSemDesconto}`
        if(A[i].precoSemDesconto > 0){
        div4.appendChild(span4)}
        let p2 = document.createElement("p")
        p2.innerText = "R$"+`${A[i].precoAtual}`
        div4.appendChild(p2)
        let iShop = document.createElement("i")
        iShop.classList.add("fa")
        iShop.classList.add("fa-shopping-cart")
        iShop.id = `${A[i].id}`
        iShop.classList.add("product-cart")
        div4.appendChild(iShop)
        let iHeart = document.createElement("i")
        iHeart.classList.add("fa")
        iHeart.classList.add("fa-heart")
        iHeart.classList.add("product-heart")
        iHeart.id = `${A[i].id}`
        div4.appendChild(iHeart)}}

function busca(){
    
    sectionPesquisa.innerHTML = ""

    

    for(let i = 0; products.length; i++){
        let resultadoBusca = [];
        if(products[i].nome.toLowerCase().includes(inputBusca.value.toLowerCase())){
            resultadoBusca.push(products[i])
            
            console.log(resultadoBusca)
            listarPesquisa(resultadoBusca)
            
            
            
        }     
                }
                
                
        
                
            
                }

    

btnBusca.addEventListener("click", busca)


