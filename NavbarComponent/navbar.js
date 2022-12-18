const navbar = () => {
   
    return `
      <div class="container">
            <div class="logo">
               <a href="home.html"><img class="image" class="image" src="../images/easyBuy.jpeg"/></a>
            </div>
            <button type="button" class="hamburger">
               <span></span>
            </button>
            <nav class="navbar">
               <ul>
                  <li><a href="home.html" >Home</a></li>
                  <li><a href="product.html">Products</a></li>
                  <li><a id="signup" href="signup.html">Signup</a></li>
                  <li><a id="login" href="login.html">Login</a></li>
                  <li><a id="signOut">Logout</a></li>

                  <li id="cart"><a href="cart.html">Cart&nbsp&nbsp</a><p id='count' style="margin-top:5px" >0</p></li>
               </ul>
            </nav>
      </div>
    `;
}
export {navbar}