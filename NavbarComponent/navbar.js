const navbar = ()=>{
    return ` 
    <div id="navbar">
    <div id="logo">
        <a href="./home.html"><img id="img" src="../images/easyBuy.jpeg" alt="logo"></a>
    </div>
    <div id="hamburger">
    <span></span>
    <span></span>
    <span></span>
    </div>
    <div id="main_section">
        <div id="middle_section">
            <a href="./home.html">Home</a>
            <a href="./product.html">Products</a>
        </div>
       
        <div id="right_section">
            <a href="./login.html">Login</a>
            <a href="./signup.html">SignUp</a>
            <a href="./cart.html">Cart</a>
        </div>
    </div>
    <div id="hamburgerBox" >
    <div> <a href="./home.html">Home</a></div>
    <div> <a href="./product.html">Products</a></div>
    <div> <a href="./signup.html">SignUp</a></div>
    <div> <a href="./login.html">Login</a></div>
    </div>
</div>
    `
}
export {navbar}