const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Men</li>
                    <li><a href="#" class="footer-link">T-Shirt</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Casuals</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Watch</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li><a href="#" class="footer-link">T-Shirt</a></li>
                    <li><a href="#" class="footer-link">Sweatshirts</a></li>
                    <li><a href="#" class="footer-link">Shirts</a></li>
                    <li><a href="#" class="footer-link">Jeans</a></li>
                    <li><a href="#" class="footer-link">Trousers</a></li>
                    <li><a href="#" class="footer-link">Shoes</a></li>
                    <li><a href="#" class="footer-link">Casuals</a></li>
                    <li><a href="#" class="footer-link">Formals</a></li>
                    <li><a href="#" class="footer-link">Sports</a></li>
                    <li><a href="#" class="footer-link">Watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">About Comapny</p>
        <p class="info">Support Emails - help@clothing.com, customersupport@clothing.com</p>
        <p class="info">Telephone - 180 00 00 001, 180 00 00 00</p>
        <div class="footer-social-container">
            <div>
                <a herf="#" class="social-link">Terms & Services</a>
                <a herf="#" class="social-link">Privacy Page</a>
            </div>
            <div>
                <a herf="#" class="social-link">Instgram</a>
                <a herf="#" class="social-link">Facebook</a>
                <a herf="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Clothing, Best Apparels Online Stores</p>
    `;
}

createFooter();