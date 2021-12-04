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
    <li class="link-itme"><a href="#" class="link">Home</a></li>
    <li class="link-itme"><a href="#" class="link">Women</a></li>
    <li class="link-itme"><a href="#" class="link">Men</a></li>
    <li class="link-itme"><a href="#" class="link">Kids</a></li>
    <li class="link-itme"><a href="#" class="link">Accessoires</a></li>
</ul>
    `;
}

createNav();