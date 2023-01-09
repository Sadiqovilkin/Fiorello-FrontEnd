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
    {
        id:9,
        Description:"WILD CACTUS",
        Value:259,
        Imgsrc:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-5-img-300x400.jpg",
        instock: 10,
        ClassAdd:"various cactuses winter"
    },

    ]

  const Productlistscards=document.querySelector(".product_list_cards")
  function ProductlistRender() {
    CardmockData.map((products)=>{
          Productlistscards.innerHTML +=`
          <div class="column show col-lg-4 col-md-6 ${products.ClassAdd}">
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

  
  var lowerSlider = document.querySelector('#lower'),
   upperSlider = document.querySelector('#upper'),
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);

upperSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);
   
   if (upperVal < lowerVal + 4) {
      lowerSlider.value = upperVal - 4;
      
      if (lowerVal == lowerSlider.min) {
         upperSlider.value = 4;
      }
   }
   Rangemax_value.innerHTML=upperVal
};


lowerSlider.oninput = function() {
   lowerVal = parseInt(lowerSlider.value);
   upperVal = parseInt(upperSlider.value);
   
   if (lowerVal > upperVal - 4) {
      upperSlider.value = lowerVal + 4;
      
      if (upperVal == upperSlider.max) {
         lowerSlider.value = parseInt(upperSlider.max) - 4;
      }

   }
   Rangemin_value.innerHTML=lowerVal
   
};
const Rangemin_value=document.getElementById('range_minvalue');
const Rangemax_value=document.getElementById('range_maxvalue');
