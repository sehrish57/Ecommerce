const products = [
  {
    path: "data:image/jpeg;base64,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",
    title: "Mens Cotton Jacket",
    price: "$55.99",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking",
    category: "Clothing",
  },
  {
    path: "https://www.stoneharbor.com.pk/cdn/shop/files/stone-harbor-men-s-casual-shirt-men-s-premium-popcorn-casual-shirt-1158885941.png?v=1745584131&width=600",
    title: "Mens Casual Premium",
    price: "$22.3",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric",
    category: "Clothing",
  },
  {
    path: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFRUXFhYXFxUWFxcYFRUXFxgYFhUYFxUaHSggGBolHRgXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi8fIB0tLS0tLS8rLS0tLSsrLS0rLS0tLS0tLS0tLS0tLS0tLS0rKy0tKy0tLS0rLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAECAwUHBgj/xABGEAACAQICBQkDCQYEBwEAAAAAAQIDEQQhBRIxQVEGImFxgZGhwdEHE7EkMkJSYoKSsvAUI0Nyc+FTosLxJTM0Y4OT0hb/xAAYAQEAAwEAAAAAAAAAAAAAAAAAAQIDBP/EACIRAQACAQQCAwEBAAAAAAAAAAABAhEDEzEyIUESIlFhM//aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxYnERpxcpyUYra3s4LxNLPlngV/H/wAlT/5Im0RynEy35ZUqxiryaSW1t2XezzVblxhW4xpTcpTkopuMoxjd21pNpc1dG3vanT5N06ktfESnWlwlK0F/LCNkkR8s9fJjHKStPYW9v2mjfh7yHqT4TTV0009jWafaaPGckMHUVvdKD+tBuLXk+1GrwWgKuAqe8o1XUoX/AHtN7VHfNJZNrblZ2W8jNo5hOIeyAREx2kqNFXq1Iw/meb6ltZfKqWDzsuW+Bvb31+qFR/6SPPl/g0/nTtx1Gl45lfnX9T8ZeqBqtF8osNiHalWi5fVd4y7E9vYbUmJieEAAJAAAAAAAAAAAAAAAAAAAAAB4n2pYtxo0oKTSlNt2vmoq1tv2l3HLMbWaqvhK0rcNZJ+Z0H2xyerh7K+VZ93u+48JpemspprYt/DI5NXs3pwo3ebWfDuy8ju+hsT7yhSqPbKnBvrcVfxucMcUnrX4u51r2dY33uApO+xzj3TdvBotoz5V1OHpjV8p8aqOFqze3UcYrjKXNj4vwZtDwPtK0gtanRvsTqSXS8oX7NbvNr2xVSsZldp7l3ChRpwptSqunDWe1Qbir9cvBeBziWIr4upeTlLWlbe5Sb2Jb2zWaPpuvUnKclqqTW3bm8l0HXvZ3oOKgsTJJt3VLhGKycl0vNdXWc/m84aeKwcl+QkIJTxKUpbqW2Ef5vrS8Oss5TcjYqLqUMkk3KGWS4ptbOg92WVYpxaexpp9T2m86VcYZ/Oc5cKxuAjBazlLWvzVFK7lutZLvOmezrT0sTh3Gq71aTUZN7ZRfzZPpyafV0njsZTUZSis3FtdzttJfIWu6WPUW1arCSstia56z3vmvvOfTnFmt4zDqQAOxgAAAAAAAAAAAAAAAApJ2zZynlJpyVavKcZTjBc2Fm1zV9LLe9vdwPa8t8e6dDUjtqvV+4s59+S+8c2lTu7HPrX9NdOvtV4+s9tWr2zl6ljxU39OX4n6iUC2MTny0wVJX+c2+t3+JFlSjwRnnF7iyFN3zCWNYeO+K7kScNXqU1q05zhG99WEnFXe12Ttco4FXEIZJY+tl++qf+yXqYMRm25Zt73m31tlYwzKVINjIjTtwRNw1apFK05xitkVKS8E9hhp0c7syyTYGWePqv8Ai1M/ty9TFVrSUWnKTTytd2ZWEM2YMdK3Z+vNEizRbn7ybk+ba0Yroe39cTaYGrqYrD1NbZVimluWsr37GyBoSOcpdCM2kG+bJbYyWfAex24FtOV0nxSfeXHe5gAAAAAAAAAAAAAAAHPOXWK1sRqp5U4pW6Zc5+Gr3Hnab2m301HXlOqtrnLtWs1HwSNW42OG05mZdERiGGaLWjI0LFVmNorGN/Det+aFVZZb8l1vJeJssMrRio77yz4bl15x7itrYWrXKAqD6PxR9SytDVte127JJpu9m92zY+42kKrV87pSUXlbhs6r+DIGOlrVepf7f60VreZnC01iIYlAqolUi9I0ZrfdlY00XopNZAY4U0abSEm56q32d+/yt3G91jzOJqXqzcXezat1c3yJhDb6Gsm10EnSKvB2XBkPQ0k2+r0JuOT93K3C74JXIHXNDz1qFF8aVN98UTDWcmJ3wlB/9qC7lbyNmd8cOeQAEoAAAAAAAAAAAMGPr6lOc/qwlLuTZnNVynnbDyW+TjHvkr+FyLTiMpjl4vU/dpdXwNTNZm4qyvJx3GqqxszgdDA0VpozShkUpUwlHnC7t/vwy6d/YT5rWtq7OMWr8LZ7vRESor3Lc+Pa0n4spauV62wmzaSztFLO2V8tmzYrmuw6crya2v8A38bvtMqp8c/1w2GRCtMFrZY7AyWLEi6ilikvP+5kSLN4FlXJN3PHYek1Vut7bfaeq0rU1abduC72o+ZAoYZLnbyYQzaHp2qSXQT8al7uaWd45vciPgWlLPereZLqpuLS3pkJdJ5GyvgqP8rXdKSN0ef5CP5FS6Nb8zfmegO6nWHNPIACyAAAAAAAAAAADz3LCtaNOPTKS+7G3+rwPQkLSujo14assms4yW2L4r03lbxmsxCaziXOMPVs2+8sxElJ5F2kMLOjUcJLnLua3NdBfiJKKirZtKT6GzhdDCtlt1+guqTSVkMTG1mtjzMLWS7QlZYqgo3FgKlj2iWwtjLpYGS5SL/Viil0lLXCCTuX00UUURMfj1CL4r9ZgYdPT/dvqb/Cm/jYsSyNDSrSqTquTbWrNdlns4G9a2dRMjJhFea/W42Esk7EPRVO9S32ZPuRspwssiEva+z2d8HHolJeJ6U8p7Nn8j/8s/I9Wdun1hz25AAXVAAAAAAAAAAAAAHjeW1FKXvHG9oXy6HaxpcLg5VYxqNpXinlnbLY3lmev5U0NaD4arXimjk875wu7azy3bl5HLMRF5zDaOq2ppepLHfssNWVON+ck29mWetZLWN1i8NKGTm9nBeBbyXwcUpVbbZvw5i8I37SdjZa0mZW5XhppRqbp+CLZSqr6a/D/cmOnZlkoECK61T7L7H6l0a9ThHxM/uS+NICLUxc043jG8nba9lrt7OgpHHS3wXZL+w0uv3cmrpxTaayaaW5o1axdR5OTXSkk+9I0p8ceVbZ9JmN0ltUctze81lWHMV8834l9Cm5SfaSa9PJLpRVZAwVL/mNfVsbdrYYo4dQp9aTfbYzNESNzyUw2vVqdFCq14LzMlXm3vuuSvZ0vlUv6U/zQMulsGoTqQ2JZK+zV3eBMx9YlGfOG+9nMX+xp/WqTkuq6XkeoNLyNpOOCw6f+Gn3tvzN0dlI+sMLcgALIAAAAAAAAAAAAAGr01nqripeXqck0haMpvbbWfddnWtO/NT6JfA4zpqo1Sm1teXbJpeZzX7Na8PTcnoOGGhF7bK/XZX8WVmilGpbLcX1TBojyjmUsXloSRiJFSkgNbpGXMn/ACv4GohHY+o2mnObRm+jw3mvpPJdSLVVlI0YruT3IzTjeS6PMwaKdnNGabs+4hJVzguqPxRSTzEsoL7vxRSUSB6r2d/9U/6U/wA0CF7ZtIfs9WhOKUpThJNXzSg00+rnNdhO9nS+Uv8ApS/NA8Z7Y8Q56U1M3q0qUElntcp5Ljzzev8Amzns9T7FtNzrSxFKcpO2rOMZNtQT5urC+xZXstlzqZxf2I08T7+fvKVWNKMaj95OMoxcp+7WotZK75jeV7XztlftBvThnbkABZAAAAAAAAAAAAAA0HLGbjQ1lu1vFNHHtMztTtxlbwkzr/LuVsJN9K683bzONaZ+bBZ5zVstt0+Df6Zz6nZrXh7LDx1oKXQvBK5a2W4OUowtu4lGc7UZRArcCqKNZlSgGn5Ru9Oa4RbINNbOw2OlYOUKnVbs3mupy2dRaqspGBfOfaZa/oYsPG0mZa+ztXxIStk+auuPxRfF5GGssu2P5kSWB6n2cR+UTfCk/GUPQ8PytrX5SJvZHE4Rd0aPqe29nb+Uy/oy/PA51yqn/wAbqy4Yun/ldOPkbV6M57PowAHSyAAAAAAAAAAAAAAAAaPlhg1Vw7i5OK1k7roTOWV9EOcoXmtWMuG3Z+u06hyyruNFKO2TsjyNbDKMVHeld9e85NWfs2pwso089TdbJkaorMl0pWzZDqzu2ZNFjZXWLGgmBlcwpGO5bcDHiebCbey0n4GkoxvFO8c0ty4cTe6/FECthVF3UVbjbYTEoYKqs012mWpK6vxt2FJotSyt0oC6aurdXg0zMY6ZmaIHpvZyvlNTopPxnD0PA6SwbqaXqS4434VkvI977PKtsVKPGjLwlD+55rRslPS8Y75YupL8E5Tf5TaOsQpPMu2AA6mIAAAAAAAAAAAAAAADScpoq1O/1n8Lt9yPF42teTZ7DllVcaKcVeWts6LO+fcc0jUxN5a1ODSbV1Nq+fBo5NXs3pw2VWpcjsj++nvpvsafxsU/aX/hz7o+pkslFCKsb9ma+6/Iq8bHhL8E/QJSblUyJLGx+1+GXoWLHR+1+GXoBOlAxNW6URnjssoyb4ar9DCtIVn/AAcv5rMDNWob4dq3f2ZFd+rZ8SQsW7XdJrqafoW1Zxksrpu25hCryRYsRdmOeJb+i2lvtkVdXLNegS3fJHEamNoy3Sbg/vppf5tU0ns1oTraYnXtenTq1k5blKoqqgul5MYfFuElKKzi1JcE07oncjcVzsNh8PFq1RVar+lUrSd6k5W+jGPNXQuk1pZS0O0AA62AAAAAAAAAAAAAAAADV6bwEqqSSi1Zppu22x5OpyTxNrR93ZZJa7vZZLNrPI6ADO2lFpzK0XmHNZ8lsWv4afVOPmzDLk/iltoz7HF/BnUAV2KrbkuVT0RiFtoVPwS8kWfsVVfOo1F9yXodYBGxH6bkuQVKUl9CS+60YnLs6zshRojY/qdz+OOa6L4TTOuSw8HtjF9aRjlo+k9tKm/uR9CNif03HKJQXURp4TP9ZHXJaIw720KX4I+hjloPDPbQpfgQ2J/TchylYSO9Z9Zfh8FKbUIRcnuSV3/Y6j/+fwv+BT7iVg8BSpX93TjC+3VSV+t7xGhPuTceU0DyJUWp4ize6mvm/ee/qWXWesw2BpU7+7pwhfbqxjG/XZEgG9aRXhnMzIACyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//2Q==",
    title: "Fjallraven - Foldsac",
    price: "$109.95",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the main compartment",
    category: "Clothing",
  },
  {
    path: "data:image/jpeg;base64,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",
    title: "John Hardy Women's L",
    price: "$695",
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean",
    category: "Jewellery",
  },
  {
    path: "https://cdn.shoplightspeed.com/shops/645668/files/54211819/1000x640x2/western-digital-western-digital-2tb-elements-porta.jpg",
    title: "WD 2TB Elements Port",
    price: "$64",
    description:
      "USB 3.0 and USB 2.0 Compatibility, Fast data transfers, Improve PC Performance, High Capacity; Compatible",
    category: "Electronics",
  },
  {
    path: "https://images.squarespace-cdn.com/content/v1/5b4544e485ede17941bc95fc/88b32e09-f809-4e16-8dc4-9a26a18d142a/arc%E2%80%99teryx-beta-sl.jpg",
    title: "Rain Jacket Women Wi",
    price: "$39.99",
    description:
      "Lightweight, perfect for trip or casual wear—Long sleeve with hooded, adjustable drawstring waist design",
    category: "Clothing",
  },
  {
    path: "https://5.imimg.com/data5/BY/GZ/OO/SELLER-88156244/boy-cotton-jacket-500x500.jpg",
    title: "Mens Cotton Jacket",
    price: "$55.99",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking",
    category: "Clothing",
  },
  {
    path: "https://www.thoughtco.com/thmb/x1_k2-GNKgiM0GOv_JWus0CQkgU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-173609232-569d7ef73df78cafda9d4f76.jpg",
    title: "White Gold Plated Pr",
    price: "$9.99",
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love",
    category: "Jewellery",
  },
  {
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUT6cLrk4WHV0uQzyA_ZKCVX7p6_hwbS6-Q&s",
    title: "Samsung 49-Inch CHG9",
    price: "$999.99",
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screens side by side, QUANTUM DOT technology",
    category: "Electronics",
  },
  {
    path: "https://m.media-amazon.com/images/I/61mExYRV6mL._AC_SL1500_.jpg",
    title: "SanDisk SSD PLUS 1TB",
    price: "$109",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA drive)",
    category: "Electronics",
  },
];
const wishList = [];
const cartList = [];

function productMapping(products) {
  products.forEach((element) => {
    let container = document.querySelector("#parent");
    let div = document.createElement("div");
    let title = document.createElement("h1");
    let price = document.createElement("h3");
    let des = document.createElement("p");
    let img = document.createElement("img");
    let div2 = document.createElement("div");
    let wish = document.createElement("button");
    let cart = document.createElement("button");

    //classes
    div.className = "card";
    title.className = "title";
    price.className = "price";
    des.className = "description";
    img.className = "image";
    div2.className = "buttons";
    wish.className = "wishbtn";
    cart.className = "cartbtn";


    //appending child
    div2.appendChild(wish);
    div2.appendChild(cart);
    div.appendChild(title);
    div.appendChild(img);
    container.appendChild(div);
    div.appendChild(price);
    div.appendChild(des);
    div.appendChild(div2);

    wish.innerText = "Add to wish";
    cart.innerText = "Add to cart";
    title.innerText = element.title;
    price.innerText = element.price;
    des.innerText = element.description;
    img.src = element.path;

    //event listeners
    wish.addEventListener("mouseenter", () => {
      wish.style.backgroundColor = "#ffedd5";
    });
    wish.addEventListener("mouseleave", () => {
      wish.style.backgroundColor = "#d1d5db";
    });
    wish.addEventListener("click", function () {
        wishList.push(element);
        localStorage.setItem("wishes", JSON.stringify(wishList));
      });

    cart.addEventListener("mouseenter", () => {
      cart.style.backgroundColor = "#c2410c";
    });
    cart.addEventListener("mouseleave", () => {
      cart.style.backgroundColor = "#ea580c";
    });
    cart.addEventListener("click", function () {
      cartList.push(element);
      localStorage.setItem("cart", JSON.stringify(cartList));
    });
  });
}

productMapping(products);

function gettingParent(){
    let container = document.querySelector("#parent");
    container.innerHTML = "";  
}

function clothing() {
  let clothArray = products.filter((e) => e.category == "Clothing");
  gettingParent()
  productMapping(clothArray);
}

function electronics() {
  let electronicArray = products.filter((e) => e.category == "Electronics");
 gettingParent()
  productMapping(electronicArray);
}

function jewellery() {
  let jewelleryArray = products.filter((e) => e.category == "Jewellery");
 gettingParent()
  productMapping(jewelleryArray);
}
