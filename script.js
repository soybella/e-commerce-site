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

function handleProductThumbnailSmall(event) {
  console.log("Thumbnail clicked");
  let clickedThumbnail = event.target;
  let newMainThumbnail = clickedThumbnail.getAttribute("data-large-src");
  let productThumbnailMain = document.querySelector(".product-thumbnail-main");

  if (productThumbnailMain && newMainThumbnail) {
    productThumbnailMain.src = newMainThumbnail;
  }
}

let productThumbnailSmall = document.querySelectorAll(".product-small-wrapper");
productThumbnailSmall.forEach((thumbnail) => {
  thumbnail.addEventListener("click", handleProductThumbnailSmall);
});

let closeNavBar = document.querySelector("#navbar-close-button");
closeNavBar.addEventListener("click", handleCloseNavBar);

let navBarIcon = document.querySelector(".nav-menu-icon");
navBarIcon.addEventListener("click", handleNavBarIcon);

let shoppingCartButton = document.querySelector(".nav-cart");
shoppingCartButton.addEventListener("click", handleShoppingCartButton);
