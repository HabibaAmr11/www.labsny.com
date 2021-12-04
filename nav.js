const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">Search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-items"><a href="HomePage.html" class="link">Home</a></li>
    <li class="link-items"><a href="WomenPage.html" class="link">Women</a></li>
    <li class="link-items"><a href="MenPage.html" class="link">Men</a></li>
    <li class="link-items"><a href="KidsPage.html" class="link">Kids</a></li>
    <li class="link-items"><a href="AccessoiresPage.html" class="link">Accessoires</a></li>
</ul>
    `;
}

createNav();