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