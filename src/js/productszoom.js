const plus = document.querySelectorAll('#plus')
const minus = document.querySelectorAll('#minus')
const value = document.querySelector('#value')

if (plus) {
  for (let index = 0; index < plus.length; index++) {
    const element = plus[index]
    element.addEventListener('click', () => {
      if (value.value > 0) {
        value.value++
      } else {
        value.value++
      }
    })
  }
}
if (minus) {
  for (let index = 0; index < minus.length; index++) {
    const element = minus[index]
    element.addEventListener('click', () => {
      if (value.value > 0) {
        value.value--
      }
    })
  }
}

const li=document.querySelectorAll(".filterbtn")

for (let index = 0; index < li.length; index++) {
    const element = li[index];
    element.addEventListener("click",(e)=>{
        const filter=document.querySelectorAll(".filter_items");
        
        for (let index = 0; index < filter.length; index++) {
            const element = filter[index];
            
            element.style.display='none'
            if(e.target.id===element.getAttribute("data-id")){
                element.style.display="block"

            }
        }

    })
}


var btnContainer = document.querySelector(".header");
if (btnContainer) {
  var btns = btnContainer.getElementsByClassName("filterbtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("filter_btnactive");
    current[0].className = current[0].className.replace(" filter_btnactive", "");
    this.className += " filter_btnactive";
  });
}
}


const CardmockData=[
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


    ]

  const productcardslist=document.querySelector(".product_cards")
  function ProductlistRender() {
    CardmockData.map((products)=>{
         productcardslist.innerHTML +=`
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
        
      })
      
  }

  ProductlistRender()
