const header = document.querySelector("#main-header");
const footer = document.querySelector("main-footer");

header.innerHTML =`
<nav class="nav">
            <div id="main-list">
                <div class="logo">
                    <a href="/index.html"><img src="/images/Logo.png" alt="Logo Image" height="90" width="100" class="button"></a>
                </div>
                
                <div class="mainNav">
                    <div class="item">Men</div>
                    <div class="item">Women</div>
                    <div class="item">Kids</div>
                </div>
                
                <div class="orderNav">
                    <div class="item" ><select name="province" id="province">
                        <option value="ontario">Ontario</option>
                        <option value="british columbia">British Columbia</option>
                        <option value="manitoba">Manitoba</option>
                        <option value="new brunswick">New Brunswick</option>
                        <option value="newfoundland and labrador">Nfl & Lab</option>
                        <option value="nova scotia">Nova Scotia</option>
                        <option value="prince edward island">Prince Ed. Island</option>
                        <option value="alberta">Alberta</option>
                        <option value="quebec">Quebec</option>
                        <option value="saskatchewan">Saskatchewan</option>
                    </select>
                </div>
                    <div class="item" id="search"><a href=""><img src="/images/search-icon.png" height="35" class="button"></a></div>
                    <div class="item" id="cart"><a href=""><img src="/images/cart-image.png" alt="cart" height="35" class="button"></a></div>
                </div>
            </div>
        </nav>
`;

footer.innerHTML = `
<br>
        <br>
        <div class="links">
            <div class="section" id="collections">
                <ul>
                    <li><p>COLLECTIONS</p></li>
                    <br>
                    <br>
                    <li><a href="">ALL ACCESSORIES</a></li>
                    <br>
                    <li><a href="">GENTLEMAN'S ACCESSORIES</a></li>
                    <br>
                    <li><a href="">LADY'S ACCESSORIES</a></li>
                    <br>
                    <li><a href="">FOR KIDS</a></li>
                    <br>
                </ul>
            </div>
            <div class="section" id="our-programs">
                <ul>
                    <li><p>OUR PROGRAMS</p></li>
                    <br>
                    <br>
                    <li><a href="">CAREERS</a></li>
                    <br>
                    <li><a href="">COMMUNITY</a></li>
                    <br>
                    <li><a href="">DONATE TO CHARITIES</a></li>
                    <br>
                    <li><a href="">TRY OUR PRODUCT</a></li>
                    <br>
                </ul>
            </div>
            <div class="section" id="customer-support">
                <ul>
                    <li><p>CUSTOMER SUPPORT</p></li>
                    <br>
                    <br>
                    <li><a href="">FAQs</a></li>
                    <br>
                    <li><a href="">COMPLAINTS</a></li>
                    <br>
                    <li><a href="">REFUND POLICY</a></li>
                    <br>
                    <li><a href="">SHIPPING POLICY</a></li>
                    <br>
                </ul>
            </div>
        </div>
<br>
<br>
<br>
        <div class="socials">
            <div class="x"><a href=""><img src="/images/x.png" height="20" class="icon"></a></div>
            <div class="tik-tok"><a href=""><img src="/images/tik-tok.png" height="20" class="icon"></a></div>
            <div class="facebook"><a href=""><img src="/images/facebook.png" height="20" class="icon"></a></div>
            <div class="instagram"><a href=""><img src="/images/instagram.png" height="20" class="icon"></a></div>
        </div>
<br>
<br>
<br>
        <div class="copyright">
            <p>Copyright © <span id="year"></span>RETRO RELICS | Established in Barrie(2025)| 322 Georgian Drive, Barrie</p>
        </div>
        <br>
`;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("year").textContent = new Date().getFullYear();
  });
