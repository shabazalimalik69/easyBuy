import { navbar } from "../NavbarComponent/navbar.js";
document.getElementById("Navbar").innerHTML = navbar();

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
let form = document.getElementById("form");
form.addEventListener("submit", LoginData);

let array = JSON.parse(localStorage.getItem("clientData"));
let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser")) || [];

function LoginData(e) {
  e.preventDefault();
  console.log("hi");
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let flag = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i].Email === email && array[i].Password === password) {
      flag = true;
      loggedUser.push(array[i]);
      sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    }
  }
  if (flag) {
    alert("Login successfully");
     window.location.href="../html/home.html"
    console.log(loggedUser);
  } else {
    alert("Enter correct credentials");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
}
