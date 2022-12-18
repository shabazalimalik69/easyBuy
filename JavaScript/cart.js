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

let cartArray = JSON.parse(localStorage.getItem("cartData"));
let paymentArray = JSON.parse(localStorage.getItem("paymentData")) || [];
let cartQuantity = JSON.parse(localStorage.getItem("cartQuantity")) || [];
let loginKey = JSON.parse(sessionStorage.getItem("loginKey"));
function logOut() {
  //console.log("Click")
  loginKey = false;
  sessionStorage.setItem("loginKey", JSON.stringify(loginKey));
  window.location.reload();
}
if (loginKey) {
  document.getElementById("signOut").addEventListener("click", logOut);
}

if (loginKey) {
  displayCartData(cartArray);
} else {
  window.location.href = "login.html";
}

function displayCartData(data) {
  let container = document.getElementById("tbody");
  container.innerHTML = "";
  let qtyCart = 0;
  let totalAmount = 0;
  data.map((el, i) => {
    qtyCart += el.quantity;
    totalAmount += el.price * el.quantity;
    console.log(totalAmount, qtyCart);

    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let image = document.createElement("img");
    image.setAttribute("src", el.thumbnail);
    // image.style.width = "100%";
    // image.style.height = "100px";
    const brand = document.createElement("td");
    brand.setAttribute("id", "brand");
    brand.innerText = el.brand;
    const name = document.createElement("td");
    name.innerText = el.title;
    const price = document.createElement("td");
    price.innerText = "₹" + " " + el.price;
    const qty = document.createElement("td");

    let quantity = document.createElement("button");
    quantity.innerText = el.quantity;
    quantity.setAttribute("class", "quantity1");

    let increase = document.createElement("button");
    increase.innerText = "+";
    increase.setAttribute("class", "quantity incQty");
    increase.addEventListener("click", () => {
      increaseQty(el, i);
    });
    let decrease = document.createElement("button");
    decrease.innerText = "-";
    decrease.setAttribute("class", "quantity decQty");
    decrease.addEventListener("click", () => {
      decreaseQty(el, i);
    });

    let button = document.createElement("button");
    let td2 = document.createElement("td");
    button.innerText = "Remove";
    button.setAttribute("class", "button1");
    button.addEventListener("click", () => {
      removeFun(el, i);
    });
    let button2 = document.createElement("button");
    button2.setAttribute("class", "button1 button2");
    let td3 = document.createElement("td");
    button2.innerText = "Confirm";
    button2.addEventListener("click", () => {
      confirmFun(el, i);
    });
    td.append(image);
    td2.append(button);
    td3.append(button2);
    qty.append(increase, quantity, decrease);
    tr.append(td, brand, name, price, qty, td2, td3);
    container.append(tr);
  });
  document.getElementById("totalAmount").innerText =
    "Total Amount" + ":" + " " + "₹" + " " + totalAmount;
  document.getElementById("count").innerText = qtyCart;
  cartQuantity.push(qtyCart);
  localStorage.setItem("cartQuantity", JSON.stringify(cartQuantity));
}

function removeFun(el, i) {
  cartArray.splice(i, 1);
  localStorage.setItem("cartData", JSON.stringify(cartArray));
  localStorage.removeItem("cartQuantity");
  window.location.reload();
}

function increaseQty(elem, i) {
  elem.quantity++;
  //console.log(elem.quantity);
  document.querySelectorAll(".quantity1").innerText = elem.quantity;
  localStorage.setItem("cartData", JSON.stringify(cartArray));
  displayCartData(cartArray);
}
function decreaseQty(elem, i) {
  if (elem.quantity > 1) {
    elem.quantity--;
  }
  console.log(elem.quantity);
  document.querySelectorAll(".quantity1").innerText = elem.quantity;
  localStorage.setItem("cartData", JSON.stringify(cartArray));
  displayCartData(cartArray);
}

function confirmFun(el, i) {
  paymentArray.push(el);
  localStorage.setItem("paymentData", JSON.stringify(paymentArray));
  localStorage.removeItem("cartQuantity");
  removeFun(el, i);
  window.location.href = "payment.html";
}
