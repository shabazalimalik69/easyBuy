import {navbar} from "../NavbarComponent/navbar.js"
document.getElementById("Navbar").innerHTML = navbar()

import { footer } from "../NavbarComponent/footer.js";
document.getElementById("footer").innerHTML = footer();

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
let cartQty =JSON.parse(localStorage.getItem("cartQuantity")) || [];
//console.log(cartQty[0])
document.getElementById("count").innerText = cartQty[0];
  
 let carouselArr = [
  '../images/Banner/img1.jpeg',
  '../images/Banner/img2.jpeg',
  '../images/Banner/img3.jpeg',
  '../images/Banner/img4.jpeg',
  '../images/Banner/img5.jpeg',
  '../images/Banner/img6.jpeg',
  "https://logan.nnnow.com/content/dam/nnnow-project/09-march-2022/Benefit_TopbannerDesktop(2).jpg",
  "https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_Topbanner_Newatsephoradesktop.jpg",
  "https://logan.nnnow.com/content/dam/nnnow-project/22-april-2022/ABH_TopBanner_ABHMattelipstickslaunchDESKTOP.gif",
  "https://logan.nnnow.com/content/dam/nnnow-project/13-april-2022/se/Sephora_TopBanner_Summer,Sunshine&SPFDesktop.jpg",
  "https://logan.nnnow.com/content/dam/nnnow-project/11-april-2022/SC_Homepage_Beautypowerforall_Desktop.jpg"
 ];

 let i = 0;
const carouselFun = (i)=>{
  let image = document.getElementById("slideImage");
 image.setAttribute("src",carouselArr[i])
}

setInterval(() => {
  if(i===carouselArr.length-1){
    i=0
  }else{
    i++
  }
  carouselFun(i)
}, 3000);