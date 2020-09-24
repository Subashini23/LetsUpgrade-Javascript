let merch = [
  {
    id: 1,
    name: "Pink Kurti",
    size: "M",
    color: "Pink",
    price: 599,
    image: "https://images-na.ssl-images-amazon.com/images/I/61-8cOrbFPL._UY550_.jpg",
    description: "Fashion Pink Color Rayon Kurti",
  },
  {
    id: 2,
    name: "Long Rayon Kurti",
    size: "M",
    color: "Orange",
    price: 4000,
    image: "https://www.fabfunda.com/product-img/Long-Reyon-Kurti-1557573838.jpeg",
    description: "Orange kurta with floral dupatta",
  },

  {
    id: 3,

    name: "Party wear kurti",
    size: "M",
    color: "Green",
    price: 1200,
    image: "https://hashrail.sgp1.cdn.digitaloceanspaces.com/CND/Product/large/CNDK13_1.jpg",
    description: "Green Heavy Cotton Long Flair Kurti",
  },

  {
    id: 4,
    name: "Roz Meher Zaira Kurti",
    size: "S",
    color: "White",
    price: 950,
    image: "https://cdn.faridagupta.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/o/roz_meher_zaira_kurti_01.jpg",
    description: "White Block Printed cotton kurti",
  },

  {
    id: 5,
    name: "Kurti with Palazzo set",
    size: "L",
    color: "Ligth Green",
    price: 699,
    image:"https://aaravmart.com/wp-content/uploads/2019/09/Marlin-Womens-Cotton-Kurti-With-Palazzo-Pant-Set-Green.jpg",
    description: "Cotton Kurti with palazzo",
  },

  {
    id: 6,
    name: "Elegant white kurti",
    size: "M",
    color: "White",
    price: 2000,
    image:"https://kalkifashion.com.imgeng.in/media/catalog/product/d/a/daisy-white-long-kurti-with-a-flared-silhouette-and-thread-work-online-kalki-fashion-d001d4077y_3_.jpg",
    description: "Daisy white long kurti with a flared silhoutte and thread work",
  },
  {
    id: 7,
    name: "Neeti Nazrana Kurti ",
    size: "L",
    color: "Yellow",
    price: 2500,
    image:"https://www.suratfabric.com/wp-content/uploads/2019/03/Neeti-Nazrana-Kurti-Wholesale-Catalog-6-Pcs.jpg",
    description: "Cotton Slub with Hand Work",
  },
  {
    id: 8,
    name: "Designer Kurti",
    size: "S",
    color: "Red",
    price: 3000,
    image:"https://5.imimg.com/data5/SR/PF/MY-13396483/trendy-designer-kurti-500x500-500x500.jpg",
    description: "Designer cotton kurti for party wear",
  },
  {
    id: 9,
    name: "Casual Anarkali Kurti",
    size: "M",
    color: "Black",
    price: 3000,
    image: "https://images-na.ssl-images-amazon.com/images/I/61nyr%2BuS4uL._AC_UL1440_.jpg",
    description: "Hiral Designer Women Casual Cotton Anarkali Kurti Long Dress",
  },
  {
    id: 10,
    name: "Bishop Sleeves Kurti",
    size: "M",
    color: "Green",
    price: 4000,
    image: "https://img6.craftsvilla.com/image/upload/w_500/C/V/CV-36426-MCRAF15738094800-1537516737-Craftsvilla_1.jpg",
    description:"Printed Mint Colour Bishop Sleeves Kurti",
  },
  {
    id: 11,
    name: "Violet Kurti",
    size: "M",
    color: "Violet",
    price: 5000,
    image:"https://www.jiofab.com/pub/media/catalog/product/cache/17b9859701dc227f0a66cf4f67484d0c/l/a/ladies-flavor-new-arrival-pure-heavy-rayon-pink-kurti-jf101620.jpg",
    description: "Ladies Flavor New Arrival Pure Heavy Rayon Violet Kurti",
  },
  {
    id: 12,
    name: "Jaipur kurti",
    size: "M",
    color: "Blue",
    price: 2000,
    image:"https://www.livafluidfashion.com/birlaliva_cms/data_content/buyon_fdiary/Kurti_Image_1_20200323050947.jpg",
    description: "Free flowing designer kurti",
  },
];
   let cart=[];
   let count=0;
  function displaymerch(merchd, type="main", place="card") {
      console.log(merchd);
      let strmerch = "";
      let arrmerch="";
      merchd.forEach(function (ele, index) {
          if(type=="main"){
              strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="addToCart(${ele.id})">Add to Cart</button>
          </p>
        </div>
        </div>`;
        arrmerch+=strmerch;
          }
          
      if(type=="cartd"){
                  strmerch = ` <div class="productcardbg">
          <div class="image">
            <img src="${ele.image}" width="100%" />
          </div>
          <div>
          <h3 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px">${ele.name}</h3>
          <p>Size : ${ele.size}</p>
          <p>Color : ${ele.color}</p>
          <p>price : ${ele.price}</p>
          <h5 style="font-family : Geneva, Verdana, sans-serif; padding-left : 10px ;padding-top : 10px">${ele.description}</h5>
          <p style="padding-top: 5px">
            <button class="buttonbg" onclick="deletemerch(${ele.id})">Delete item</button>
          </p>
        </div>
        </div>`;
              
          arrmerch += strmerch;    
  
          }
      });
      
  document.getElementById(place).innerHTML = arrmerch;
      
  }
  

  function getProductByID(mercha, id) {
    return mercha.find(function (ele) {
      return ele.id == id;
    });
  }
  let flag=false;
  function addToCart(id) {
  flag=false;
    let item = getProductByID(merch, id);
  
    cart.forEach(function(element){
        if(element.id==item.id){
            flag=true;
            
        }
        
  
    })
    if (flag) {
        alert("Product already added in cart");
      return 0;
    }
    cart.push(item);
    count+=1;
    document.getElementById("numb").innerText=count;
    let type="cartd";
    let place="cartcard";
    displaymerch(cart, type, place);
  
  }
  
  
 
  function deletemerch(id){
    let item = getProductByID(merch, id);
    let index = cart.findIndex(function (item1) {
      return item1.id == id;
    });
    cart.splice(index, 1);
    count-=1;
     document.getElementById("numb").innerText = count;
     let type = "cartd";
     let place = "cartcard";
     displaymerch(cart, type, place);
  }
  
  function filterProducts(){
      let minv=document.getElementById("minp").value;
      let maxv = document.getElementById("maxp").value;
      let items= merch.filter(function(itemsl){
          return itemsl.price>=minv && itemsl.price<=maxv;
      })
       displaymerch(items);
      document.getElementById("minp").value="";
        document.getElementById("maxp").value="";
  }
  
  function searchProduct(searchValue) {
    let searchedProducts = merch.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displaymerch(searchedProducts);
  }
  displaymerch(merch);