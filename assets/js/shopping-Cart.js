let addCart = document.querySelectorAll(".product-cart")
let ul = document.querySelector(".CartProductContainer")






function TemClasse(elemento, classe) {
    return (' ' + elemento.className + ' ').indexOf(' ' + classe + ' ') > -1;
}

for(let i = 0; addCart.length; i++){

    function click (){
         
    
        
        if(addCart[i].id == `${i}` && TemClasse(addCart[i], "product-cart-active") == false){
 
            let qnt = 1
            let li = document.createElement("li")
            li.id = products[i].id
            let div = document.createElement("div")
            let img = document.createElement("img")
            let div2 = document.createElement("div2")
            let h2 = document.createElement("h2")
            let p = document.createElement("p")
            let div3 = document.createElement("div")
            let i1 = document.createElement("i")
            let i2 = document.createElement("i")
            let span = document.createElement("span")


            img.src = products[i].image
            span.classList.add("CartSpan")
            i1.classList.add("fa")
            i1.classList.add("fa-minus-circle")
            i2.classList.add("fa-plus-circle")
            i2.classList.add("fa")
            div3.classList.add("CartJustify")
            img.classList.add("CartImg")
            li.classList.add("CartCard")
            div.classList.add("CartImgContainer")
            h2.classList.add("CartH2")
            p.classList.add("CartP")
            
            h2.innerText = products[i].nome
            span.innerText ="Quantidade: "+ `${qnt}`
            let spanTotal = document.querySelector(".shopping-circle")

            div3
            ul.appendChild(li)
            li.appendChild(div)
            div.appendChild(img)
            li.appendChild(div2)
            div2.appendChild(h2)
            div2.appendChild(p)
            div2.appendChild(div3)
            div3.appendChild(i1)
            div3.appendChild(span)
            div3.appendChild(i2)
            addCart[i].classList.add("product-cart-active")

            i1.addEventListener("click", subtrair)
            function subtrair (){qnt = qnt-1
            span.innerText ="Quantidade: "+ `${qnt}`
            p.innerText = "R$"+`${products[i].precoAtual*qnt}`
        }
            i2.addEventListener("click", somar)
            function somar (){qnt = qnt+1
            span.innerText ="Quantidade: "+ `${qnt}`
            p.innerText = "R$"+`${products[i].precoAtual*qnt}`
            let spanTotal = document.querySelector(".shopping-circle")
            qntTotal = qntTotal-2+qnt
            spanTotal.innerText = `${qntTotal+qnt}`}
            p.innerText = "R$"+`${products[i].precoAtual*qnt}`
            

                
        }

        

        else if(addCart[i].id == `${i}` && TemClasse(addCart[i], "product-cart-active") == true){
            let li2 = document.getElementById(`${addCart[i].id}`)
            addCart[i].classList.remove("product-cart-active")
            ul.removeChild(li2)

            

        }
           
        

    }

    addCart[i].addEventListener("click", click)
}



