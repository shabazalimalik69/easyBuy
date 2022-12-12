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

 document.getElementById('productContainer').addEventListener('click',getProductFun);
let cartArray = JSON.parse(localStorage.getItem('cartData')) || [];
 async function getProductFun(){
  try {
    let res = await fetch('http://localhost:3000/products');
    let data = await res.json();
    displayData(data)
    document.getElementById('sortByPrice').addEventListener('click',()=>{
      sortByPriceFun(data)
    });
    document.getElementById('filterByBrand').addEventListener('click',()=>{
      filterByBrandFun(data)
    });
  } catch (error) {
    console.log(error)
  }
 }
 getProductFun();

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

 function filterByBrandFun(data){
  let filteredValue = document.getElementById('filterByBrand').value;
  //console.log(filteredValue)
  let filteredData = data.filter((el)=>{
    return el.brand === (filteredValue)
  });
  displayData(filteredData)
 }
 function displayData(data){
  let container = document.getElementById('productContainer');
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
 function addCartFun(el){
  cartArray.push(el);
  localStorage.setItem('cartData',JSON.stringify(cartArray));
  alert('Successfully Added')
 };

 

 