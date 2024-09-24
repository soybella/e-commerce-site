let currentPhotoIndex = 0;
let currentProductQuantity = 0;
let closeNavBar = document.querySelector("#navbar-close-button");
let shoppingCartButton = document.querySelector(".nav-cart");
let navBarIcon = document.querySelector(".nav-menu-icon");
let productThumbnailSmall = document.querySelectorAll(".photo");
let productThumbnailSmallLightBox =
  document.querySelectorAll(".photo-light-box");
let productThumbnailMain = document.querySelector(".product-thumbnail-main");
let productThumbnailMainLightbox = document.querySelector(
  ".light-box .product-thumbnail-main"
);
let previousButtonMain = document.querySelector(".main-previous-button");
let nextButtonMain = document.querySelector(".main-next-button");
let previousButtonLightBox = document.querySelector(".light-box-previous");
let nextButtonLightBox = document.querySelector(".light-box-next");
let displayLightBox = document.querySelector(".light-box");
let closeLightBox = document.querySelector("#light-box-close-button");
let minusQuantityButton = document.querySelector(".minus-product-button");
let addQuantityButton = document.querySelector(".add-product-button");
let quantityNumber = document.querySelector(".quantity-number");
let quantityNumberTotal = document.querySelector(".product-quantity-total");
let productDiscountPrice = document.querySelector(".discount-price-cart");
let productName = document.querySelector(".product-name");
let addToCartButton = document.querySelector(".button-add-to-cart");
let shoppingCartBasket = document.querySelector(".shopping-cart-basket-filled");
let shoppingCartEmptyBasket = document.querySelector(
  ".shopping-cart-empty-message"
);
let deleteProductButton = document.querySelector(".delete-product");
deleteProductButton.addEventListener("click", handleDeleteProductButton);
let shoppingCartFilledBasket = document.querySelector(
  ".shopping-cart-basket-quantity"
);
let shoppingCartCheckoutButton = document.querySelector(
  ".shopping-cart-checkout-button "
);

// let activeThumbnail = document.querySelector(".active");
// activeThumbnail.disabled = true;
// activeThumbnail.classList.add("no-hover");

productThumbnailSmall.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentPhotoIndex = index;
    updateMainPhoto();
  });
});

productThumbnailSmallLightBox.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentPhotoIndex = index;
    updateLightboxPhoto();
  });
});

previousButtonMain.addEventListener("click", () => {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    updateMainPhoto();
  }
});

nextButtonMain.addEventListener("click", () => {
  if (currentPhotoIndex < productThumbnailSmall.length - 1) {
    currentPhotoIndex++;
    updateMainPhoto();
  }
});

previousButtonLightBox.addEventListener("click", () => {
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    updateLightboxPhoto();
  }
});

nextButtonLightBox.addEventListener("click", () => {
  if (currentPhotoIndex < productThumbnailSmallLightBox.length - 1) {
    currentPhotoIndex++;
    updateLightboxPhoto();
  }
});

closeLightBox.addEventListener("click", () => {
  displayLightBox.classList.add("hidden");
});

productThumbnailSmall.forEach((thumbnail) => {
  thumbnail.addEventListener("click", handleProductThumbnailSmall);
});

productThumbnailSmallLightBox.forEach((thumbnail) => {
  thumbnail.addEventListener("click", handleProductThumbnailSmallLightBox);
});

closeNavBar.addEventListener("click", handleCloseNavBar);
navBarIcon.addEventListener("click", handleNavBarIcon);
shoppingCartButton.addEventListener("click", handleShoppingCartButton);
minusQuantityButton.addEventListener("click", handleMinusQuantityButton);
addQuantityButton.addEventListener("click", handleAddQuantityButton);
addToCartButton.addEventListener("click", handleAddToCart);

function checkScreenWidth() {
  if (window.innerWidth >= 768) {
    productThumbnailMain.addEventListener("click", handleThumbnailClick);
  } else {
    productThumbnailMain.removeEventListener("click", handleThumbnailClick);
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

function handleAddToCart() {
  shoppingCartBasket.classList.remove("hidden");
  shoppingCartEmptyBasket.classList.add("hidden");
  shoppingCartFilledBasket.classList.remove("hidden");
  shoppingCartFilledBasket.innerHTML = currentProductQuantity;
  shoppingCartCheckoutButton.classList.remove("hidden");

  productDiscountPrice.innerHTML = `$${productDiscountPrice.getAttribute(
    "data-product-price"
  )}`;

  let discountPrice = productDiscountPrice.getAttribute("data-product-price");

  let productDiscountPriceNumber = parseFloat(discountPrice);

  console.log(productDiscountPriceNumber);

  let quantityPriceTotal = currentProductQuantity * productDiscountPriceNumber;
  console.log(quantityPriceTotal);

  if (Number.isInteger(quantityPriceTotal)) {
    document.querySelector(
      ".product-total-price"
    ).innerHTML = `$${quantityPriceTotal}.00`;
  } else {
    document.querySelector(
      ".product-total-price"
    ).innerHTML = `$${quantityPriceTotal.toFixed(2)}`;
  }

  productName.innerHTML = document
    .querySelector(".product-name")
    .getAttribute("data-product-name");
}

function handleDeleteProductButton() {
  currentProductQuantity = 0;
  quantityNumber.innerHTML = currentProductQuantity;

  shoppingCartBasket.classList.add("hidden");
  shoppingCartEmptyBasket.classList.remove("hidden");
  shoppingCartCheckoutButton.classList.add("hidden");
  shoppingCartFilledBasket.classList.add("hidden");
}

function handleMinusQuantityButton() {
  if (currentProductQuantity > 0) {
    currentProductQuantity--;
    console.log(currentProductQuantity);
    quantityNumber.innerHTML = currentProductQuantity;
    quantityNumberTotal.innerHTML = `x ${currentProductQuantity}`;
  }
}

function handleAddQuantityButton() {
  currentProductQuantity++;
  console.log(currentProductQuantity);
  quantityNumber.innerHTML = currentProductQuantity;
  quantityNumberTotal.innerHTML = `x ${currentProductQuantity}`;
}

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
  let clickedThumbnail = event.target;
  let newMainThumbnail = clickedThumbnail.getAttribute("data-large-src");
  let newMainThumbnailLightBox =
    clickedThumbnail.getAttribute("data-large-src");

  // put this style on light box thumbnails and fix it to take event listener off when another thumbmnail is clicked
  // if (clickedThumbnail.classList.contains("active")) {
  //   clickedThumbnail.disabled = true;
  //   clickedThumbnail.classList.add("no-hover");
  // }

  if (productThumbnailMain && newMainThumbnail) {
    productThumbnailSmall.forEach((thumbnail) => {
      thumbnail.classList.remove("active");
      thumbnail.classList.remove("no-hover");
      clickedThumbnail.classList.add("active");
      clickedThumbnail.classList.add("no-hover");
    });
    productThumbnailMain.src = newMainThumbnail;
    productThumbnailMainLightbox.src = newMainThumbnailLightBox;
  }
}

function handleProductThumbnailSmallLightBox(event) {
  let clickedThumbnail = event.target;
  let newMainThumbnailLightBox =
    clickedThumbnail.getAttribute("data-large-src");

  if (productThumbnailMainLightbox && newMainThumbnailLightBox) {
    productThumbnailMainLightbox.src = newMainThumbnailLightBox;
  }
}

function updateMainPhoto() {
  let newPhotoSrc =
    productThumbnailSmall[currentPhotoIndex].getAttribute("data-large-src");
  productThumbnailMain.src = newPhotoSrc;
  updateButtonStates(
    previousButtonMain,
    nextButtonMain,
    productThumbnailSmall.length
  );
}

function updateLightboxPhoto() {
  let newPhotoSrcLightBox =
    productThumbnailSmallLightBox[currentPhotoIndex].getAttribute(
      "data-large-src"
    );
  productThumbnailMainLightbox.src = newPhotoSrcLightBox;
  updateButtonStates(
    previousButtonLightBox,
    nextButtonLightBox,
    productThumbnailSmallLightBox.length
  );
}

function updateButtonStates(previousButton, nextButton, length) {
  previousButton.disabled = currentPhotoIndex === 0;
  nextButton.disabled = currentPhotoIndex === length - 1;
}

function handleThumbnailClick() {
  displayLightBox.classList.remove("hidden");
}
