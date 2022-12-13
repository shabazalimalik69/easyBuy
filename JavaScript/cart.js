import {navbar} from "../NavbarComponent/navbar.js"
document.getElementById("Navbar").innerHTML = navbar()


 const navToggler = document.querySelector(".hamburger");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".navbar");
   nav.classList.toggle("open");
   if (nav.classList.contains("open")) {
     nav.style.maxHeight = nav.scrollHeight + "px";
   } else {
     nav.removeAttribute("style");
   }
 }

 let cartArray = JSON.parse(localStorage.getItem('cartData'));
 console.log(cartArray)
displayCartData(cartArray);
 function displayCartData(data){
  let container = document.getElementById('cartContainer');
  data.map((el,i)=>{
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
    button.innerText = 'Remove'
    div.append(image,brand,name,price,button);
    button.style.display = 'block';
    button.style.margin = 'auto';
    button.style.marginBottom = '15px'
    button.style.backgroundColor = 'brown'
    button.style.padding = '10px'
    button.style.borderRadius = '10px'
    button.style.color = 'white'
    button.style.cursor = 'pointer'
    button.setAttribute('class','button1')
    button.addEventListener('click',()=>{
      removeFun(el,i)
    })
    container.append(div)
  })
 };

 function removeFun(el,i){
  cartArray.splice(i,1);
  localStorage.setItem('cartData',JSON.stringify(cartArray));
  window.location.reload();
 };