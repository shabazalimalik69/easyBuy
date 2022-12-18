import {navbar} from "../NavbarComponent/navbar.js"
document.getElementById("Navbar").innerHTML = navbar()


 const navToggler = document.querySelector(".hamburger");
 navToggler.addEventListener("click", navToggle);

function navToggle() {
   console.log("clicked")
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".navbar");
   nav.classList.toggle("open");
   if (nav.classList.contains("open")) {
     nav.style.maxHeight = nav.scrollHeight + "px";
   } else {
     nav.removeAttribute("style");
   }
 }
let loginKey = JSON.parse(sessionStorage.getItem("loginKey"));
 let cartQty =JSON.parse(localStorage.getItem("cartQuantity")) || [];
//console.log(cartQty[0])
document.getElementById("count").innerText = cartQty[0];

 document.getElementById('productContainer').addEventListener('click',getProductFun);
let cartArray = JSON.parse(localStorage.getItem('cartData')) || [];
 async function getProductFun(){
  try {
    let res = await fetch("https://easybuybackend-production.up.railway.app/products");
    let data = await res.json();
    console.log(data)
    document.getElementById('sortByPrice').addEventListener('click',()=>{
      sortByPriceFun(data)
    });
    document.getElementById('sortByName').addEventListener('click',()=>{
      sortByNameFun(data)
    });
    document.getElementById('filterByBrand').addEventListener('click',()=>{
      filterByBrandFun(data)
    });
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}
if (loginKey) {
  getProductFun();
} else {
  window.location.href="login.html"
 }

 function sortByPriceFun(data){
  let sortedValue = document.getElementById('sortByPrice').value;
  if(sortedValue==='asc'){
    let ascData = data.sort((a,b)=>{
      return a.price - b.price
      
    })
    //console.log(Data)
    displayData(ascData)
  }else if(sortedValue==='desc'){
    let descData = data.sort((a,b)=>{
      return b.price - a.price
    })
    //console.log(Data)
    displayData(descData)
  }
 
 }
 function sortByNameFun(data){
   let sortedValue = document.getElementById('sortByName').value;

   if (sortedValue === "asc") {
     let ascData = data.sort((a, b) => {
              var x = a.title.toUpperCase();
              var y = b.title.toUpperCase();
       if (x > y) {
         return 1;
       }
       if (x < y) {
         return -1;
       }
       return 0;
     })
     console.log(ascData)
     displayData(ascData)
   }
  else if(sortedValue==='desc'){
    let descData = data.sort((a,b)=>{
           var x = a.title.toUpperCase();
           var y = b.title.toUpperCase();
           if (x > y) {
             return -1;
           }
           if (x < y) {
             return 1;
           }
           return 0;
    })
    console.log(descData)
    displayData(descData)
  }
 
 }

function filterByBrandFun(data) {
   
  let filteredValue = document.getElementById('filterByBrand').value;
  if (filteredValue === "default") {
    displayData(data)
  } else {
    let filteredData = data.filter((el) => {
      return el.brand === filteredValue
    });
    // console.log(filteredData);
    displayData(filteredData)
  }
 }
function displayData(data) {
  //  console.log(data);
  let container = document.getElementById('productContainer');
  container.innerHTML = "";
  data.map((el)=>{
    let div = document.createElement('div')
    let image = document.createElement('img');
    image.setAttribute('src',el.thumbnail);
    image.style.width = '100%'
    image.style.height = '300px';
    const brand = document.createElement('h4')
    brand.innerText = el.brand
    const name = document.createElement('h4')
    name.innerText = el.title;
    const price = document.createElement('p')
    price.innerText = '₹'+' '+el.price
    let button = document.createElement('button');
    button.innerText = 'Add to Cart'
    div.append(image,brand,name,price,button);
    button.style.display = 'block';
    button.style.margin = 'auto';
    button.style.marginBottom = '15px'
    button.style.backgroundColor = 'teal'
    button.style.padding = '10px'
    button.style.borderRadius = '10px'
    button.style.color = 'white'
    button.style.cursor = 'pointer'
    button.setAttribute('class','button1')
    button.addEventListener('click',()=>{
      addCartFun(el)
    })
    container.append(div)
  })
 };
function addCartFun(el) {
  el.quantity = 1;
  // console.log(cartArray[0].id)
  // console.log(cartArray)
  let flag = true;
  for (let i in cartArray) {
    if (cartArray[i].id===el.id) {
      flag = false;
    }
  }
  if (flag) {
    cartArray.push(el);
     localStorage.setItem("cartData", JSON.stringify(cartArray));
     setTimeout(() => {
      alert("Successfully Added");
     }, 100);
  } else {
    setTimeout(() => {
      alert("Product is already in Cart");
    },100);
  }
 
 };

 

 