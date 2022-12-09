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
                  <li><a href="signup.html">Signup</a></li>
                  <li><a href="login.html">Login</a></li>
                  <li><a href="cart.html">Cart</a></li>
               </ul>
            </nav>
      </div>
    `;
}
export {navbar}