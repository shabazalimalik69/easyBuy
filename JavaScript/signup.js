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

let array = JSON.parse(localStorage.getItem("clientData")) || [];
  function userData(name, email, password, mobile ){
    (this.Name = name),
      (this.Email = email),
      (this.Password = password),
      (this.Mobile = mobile);
  };

  const signupData = (e) => {
    e.preventDefault();
    
      let name= document.getElementById("name").value
      let email= document.getElementById("email").value
      let password= document.getElementById("password").value
      let mobile= document.getElementById("mobile").value
     
    let userArr = new userData(name, email, password, mobile);
    let flag = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i].Email === email) {
        flag = false;
      }
    }
    if (flag) {
      array.push(userArr);
      localStorage.setItem("clientData", JSON.stringify(array));
      alert("SignUp successfully");
      window.location.href = "../html/login.html";
       document.getElementById("name").value = "";
       document.getElementById("email").value = "";
       document.getElementById("password").value = "";
       document.getElementById("mobile").value = "";
    } else {
      alert("Email already exist");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("mobile").value = "";
    }
  }

let form = document.getElementById("form");
form.addEventListener("submit", signupData);

  