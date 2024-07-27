function handleShoppingCartButton() {
  let openCart = document.querySelector(".shopping-cart-open");
  openCart.classList.toggle("hidden");
}

function handleNavBarIcon() {
  let responsiveNavBar = document.querySelector(".navbar-responsive");
  responsiveNavBar.style.display = "block";
}

function handleCloseNavBar() {
  let responsiveNavBar = document.querySelector(".navbar-responsive");
  responsiveNavBar.style.display = "none";
}

let closeNavBar = document.querySelector("#navbar-close-button");
closeNavBar.addEventListener("click", handleCloseNavBar);

let navBarIcon = document.querySelector(".nav-menu-icon");
navBarIcon.addEventListener("click", handleNavBarIcon);

let shoppingCartButton = document.querySelector(".nav-cart");
shoppingCartButton.addEventListener("click", handleShoppingCartButton);
