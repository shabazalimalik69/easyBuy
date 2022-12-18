import {navbar} from "../NavbarComponent/navbar.js"
document.getElementById("Navbar").innerHTML = navbar()

let paymentArray = JSON.parse(localStorage.getItem("paymentData"));

document.getElementById("title").innerText ="Title: "+ paymentArray[0].title;
document.getElementById("quantity").innerText ="Quantity: "+ paymentArray[0].quantity;
document.getElementById("amount").innerText ="Total Amount: "+"₹ "+(paymentArray[0].quantity)*(paymentArray[0].price);

// function paymentDataFun(name,mobile,address,cardNum,expiryDate,cvv){
//           this.Name = name,
//           this.Mobile = mobile,
//           this.Address = address,
//           this.CardNum = cardNum,
//           this.expiryDate = expiryDate,
//           this.CVV = cvv
// }



const paymentSubmitFun = (e)=>{
     e.preventDefault();
     alert(`You have made a payment of ₹ ${(paymentArray[0].quantity)*(paymentArray[0].price)} for ${paymentArray[0].title}`);
     localStorage.removeItem("paymentData")
     window.location.href = 'home.html'
}
document.getElementById("form").addEventListener("submit",paymentSubmitFun);
let cartQty =JSON.parse(localStorage.getItem("cartQuantity"))||[];
//console.log(cartQty[0])
document.getElementById("count").innerText = cartQty[0];