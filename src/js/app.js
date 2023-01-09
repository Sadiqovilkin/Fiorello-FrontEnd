const bi_search = document.querySelector('.bi-search')
const search = document.querySelector('.search')

if (bi_search) {
  bi_search.addEventListener('click', e => {
    search.classList.toggle('active')
  })
}
// First swiper
var swiper = new Swiper(".secswiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".bi-arrow-right",
      prevEl: ".bi-arrow-left",
    },
  });
  
  filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
}


// add to cart
const CardData=[
    {
        id:1,
        Description:"MAJESTY PALM",
        Value:259,
        Imgsrc:"	https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg",
        instock: 10,
        ClassAdd:"cactuses popular"
    },
    {
        id:2,
        Description:"FOXGLOVE FLOWER",
        Value:259,
        Imgsrc:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg",
        instock: 10,
        ClassAdd:"greens various"
    },
    {
        id:3,
        Description:"SWEET ALYSSUM",
        Value:259,
        Imgsrc:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg",
        instock: 10,
        ClassAdd:"popular winter"
    },
    {
        id:4,
        Description:"MAJESTY PALM",
        Value:170,
        Imgsrc:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg",
        instock: 10,
        ClassAdd:"greens various"
    },
    {
        id:5,
        Description:"SCARLET SAGE",
        Value:159,
        Imgsrc:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg",
        instock: 10,
        ClassAdd:"exotic winter"
    },
    {
        id:6,
        Description:"ROCK SOAPWORT",
        Value:259,
        Imgsrc:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg",
        instock: 10,
        ClassAdd:"cactuses winter"
    },
    {
        id:7,
        Description:"SUMMER SAVORY",
        Value:259,
        Imgsrc:"	https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg",
        instock: 10,
        ClassAdd:"exotic greens"
    },
    {
        id:8,
        Description:"WILD ROSES",
        Value:259,
        Imgsrc:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg",
        instock: 10,
        ClassAdd:"various"
    },

    ]
    const Card=document.querySelector(".add_card")
    function ProductRender() {
        CardData.map((products)=>{
           if (Card) {
            Card.innerHTML +=`
            <div class="column show col-lg-3 col-md-6 ${products.ClassAdd}">
            <div class="content">
              <img src="${products.Imgsrc}" alt="Mountains">
              <h4>${products.Description}</h4>
              <div class="card_price">
                <p id="addcart" onclick="addToCart(${products.id})">Add to cart</p>
                <p id="price">$${products.Value}</p>
              
              </div>
            </div>
          </div>
            `	 
           }      
        })
        
    }
    
    ProductRender()
    
    
    const btnCart=document.querySelectorAll('.bi-cart4');
    const btnBasket=document.querySelector(".bi-bag");
    const MainCarts=document.querySelector('.carts');
    const Carts=document.querySelector('.main_cart');
    const subtotalEl = document.querySelector(".subtotal");
    const totalItemsInCartEl = document.querySelector(".total_item");
    
    
    // local storage 
    let cart = JSON.parse(localStorage.getItem("CART")) || [];
    updateCart();   
    function addToCart(id) {     
        if (cart.some((item) => item.id === id)) {
          changeNumberOfUnits("plus", id);
        } else {
          const item = CardData.find((product) => product.id === id);
      
          cart.push({
            ...item,
            numberOfUnits: 1,
          });
        }
        updateCart();
      }
      function updateCart() {
        renderCartItems();
        renderSubtotal();
        // save cart to local storage
        localStorage.setItem("CART", JSON.stringify(cart));
      }
      function renderSubtotal() {
        let totalPrice = 0,
          totalItems = 0;
      
        cart.forEach((item) => {
          totalPrice += item.Value * item.numberOfUnits;
          totalItems += item.numberOfUnits;
        });
      
        subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
        totalItemsInCartEl.innerHTML = totalItems;
        document.getElementById("totalprice").innerHTML=`CART($${totalPrice.toFixed(2)})`
      }
    
      function renderCartItems() {
        Carts.innerHTML = ""; 
        cart.forEach((item) => {
            Carts.innerHTML += `
            <div class="cart-item "  onclick="removeItemFromCart(${item.id})">
            <div class="item-info">
              <div class="item_img">
                <img src="${item.Imgsrc}" alt="">
              </div>
              <div class="item_desc">
                <h4>${item.Description}</h4>
              <div class="unit-price">
                <span class="number">${item.numberOfUnits}</span> <span>X</span> <span>$${item.Value}</span>
              </div>
              </div>
            </div>
        
          </div>
            `;
    
        });
      }
    
      function removeItemFromCart(id) {
        cart = cart.filter((item) => item.id !== id);
        updateCart();
      }
      function changeNumberOfUnits(action, id) {
        cart = cart.map((item) => {
          let numberOfUnits = item.numberOfUnits;
      
          if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
              numberOfUnits--;``
              console.log('ok');
            } 
            else if (action === "plus" && numberOfUnits < item.instock) {
              numberOfUnits++;
            }
          }
          return {
            ...item,
            numberOfUnits,
          };
        });
      
        updateCart();
      }
    //  if(btnBasket){
    //     btnBasket.addEventListener('click',()=>{
    // MainCarts.style.display="block";
    // console.log("ok");
    //     })
    //     btnBasket.addEventListener('dblclick',()=>{
    //         MainCarts.style.display="none";
    //         console.log("no");
    //             })
    // }
    // navbar scrool
    const addcart=document.getElementById('cart_add')
    const Navbar=document.getElementById('nav1')

     window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
        Navbar.style.transform = "translateY(-100px)";
      }
      else{
        Navbar.style.transform = "translateY(0px)";
      }
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        bi_search.style.display = "none";
        addcart.style.display = "none";
        Navbar.classList.add("navbaractive")
        Navbar.style.transform = "translateY(0px)";
      } 
      else {
         bi_search.style.display = "block";
         addcart.style.display = "flex";
        Navbar.classList.remove("navbaractive")
      }
    })

    // blog swiper 
    var swiper = new Swiper(".blogger_swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".bi-arrow-right",
        prevEl: ".bi-arrow-left",
      },
    });
    
    // back to top
    const mybutton = document.getElementById("myBtn");
 
    window.addEventListener('scroll',()=>{
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.opacity = "1";
        mybutton.style.display = "flex";
      } 
      else {
        mybutton.style.display = "none";
      }
    })
    
      if(mybutton){
        mybutton.addEventListener('click',()=>{
          
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          
        })
      }
      const NavbarOpen=document.querySelector(".nav_btn")
      const NavbarItems=document.querySelector(".nav_items")
      const NavbarClose=document.querySelector("#nav_close")
      if (NavbarOpen) {
        NavbarOpen.addEventListener('click',()=>{
          NavbarItems.style.display='block'
        })
      }
      if (NavbarClose) {
        NavbarClose.addEventListener('click',()=>{
          NavbarItems.style.display='none'
        })
      }
//        const plus = document.querySelectorAll('#plus')
// const minus = document.querySelectorAll('#minus')
// const text_pm = document.querySelector('#text_pm')

// if (plus) {
//   for (let index = 0; index < plus.length; index++) {
//     const element = plus[index]
//     element.addEventListener('click', () => {
//       if (text_pm.value > 0) {
//         text_pm.value++
//       } else {
//         text_pm.value++
//       }
//     })
//   }
// }
// if (minus) {
//   for (let index = 0; index < minus.length; index++) {
//     const element = minus[index]
//     element.addEventListener('click', () => {
//       if (text_pm.value > 0) {
//         text_pm.value--
//       }
//     })
//   }
// } 