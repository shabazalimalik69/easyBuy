function footer() {
    return `<div id="footer">
            <div id="fcontainer">
               <div id="scontainer">
                    <div class="links">
                        <div><a href="">Contact Us</a></div>
                        <div><a href="">Frequently Asked Questions</a></div>
                        <div><a href="">Shipping & Returns</a></div>
                        <div><a href="">Pre-Owned Guide</a></div>
                    </div>
                    <div class="links">
                        <div><a href="">Sell on easyBuy</a></div>
                        <div><a href="">Privacy Policy</a></div>
                        <div><a href="">Terms & Conditions</a></div>
                        <div><a href="">Do not sell my personal information</a></div>
                    </div>
                    <div class="last">
                        <p id="subscribe">Subscribe to get exclusive offers on designer brands</p>
                        <input type="text" name="mail" id="email" placeholder="Enter your email" required><br>
                        <button onclick="subscribe()">Subscribe</button><br>
                        <a href="#">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="#">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </div>
                </div>

                <div id="tcontainer">
                    <div>
                        <p>© 2022 easyBuy 2022 EASYBUY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
                    </div>

                </div>

            </div>
            </div>`;
}
export { footer };