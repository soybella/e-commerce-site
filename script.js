function handleShoppingCartButton() {
  let openCart = document.querySelector(".shopping-cart-open");
  openCart.classList.toggle("hidden");
}

function handleNavBarIcon() {
  let openNavBar = document.querySelector(".navbar-responsive");
  openNavBar.classList.toggle("hidden");
}

let navBarIcon = document.querySelector(".nav-menu-icon");
navBarIcon.addEventListener("click", handleNavBarIcon);

let shoppingCartButton = document.querySelector(".nav-cart");
shoppingCartButton.addEventListener("click", handleShoppingCartButton);
