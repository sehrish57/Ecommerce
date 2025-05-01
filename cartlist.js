
const cartArray= JSON.parse(localStorage.getItem("cart"))
if(!cartArray || cartArray.length === 0)
{
const container = document.querySelector("#divproduct");
const heading=document.createElement("h3")
heading.innerText="your cartlist is empty"
container.className="container"
container.appendChild(heading)
}
else{
cart(cartArray)
}
function cart(cartArray){
const products=document.getElementById("divproduct")
    cartArray.map((element)=>{
     const div=document.createElement("div")
     products.appendChild(div)
     div.innerHTML= `<div class="flex items-center justify-between border-b py-4">
            <img  src="" alt="Product" class="image">
            <div class="div">
                <h3 class=" name"></h3>
                <p class="price"></p>
            </div>
            <button class="button">Remove</button>
        </div>`
        const image=div.querySelector(".image")
        image.src=element.path
        const productName=div.querySelector(".name")
        productName.innerText=element.title
        const price=div.querySelector(".price")
        price.innerText=element.price
        
    })
 }
