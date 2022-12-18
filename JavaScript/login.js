import { navbar } from "../NavbarComponent/navbar.js";
document.getElementById("Navbar").innerHTML = navbar();

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
let form = document.getElementById("form");
form.addEventListener("submit", LoginData);

let array = JSON.parse(localStorage.getItem("clientData"));
let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser")) || [];
let loginKey = JSON.parse(sessionStorage.getItem("loginKey"));
if (loginKey) {
  document.getElementById("signOut").addEventListener("click", signOutFun);
  function signOutFun() {
    console.log("logout");
    loginKey = false;
    sessionStorage.setItem("loginKey", JSON.stringify(loginKey));
  }
}

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
    loginKey=true;
    sessionStorage.setItem("loginKey", JSON.stringify(loginKey));
     window.location.href="../html/home.html"
    console.log(loggedUser);
  } else {
    alert("Enter correct credentials");
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
}
