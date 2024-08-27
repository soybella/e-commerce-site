let currentPhotoIndex = 0;
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

// Event listener for main thumbnail
productThumbnailSmall.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentPhotoIndex = index;
    updateMainPhoto();
  });
});

// Event listener for lightbox thumbnails
productThumbnailSmallLightBox.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentPhotoIndex = index;
    updateLightboxPhoto();
  });
});

// Update main photo when navigating
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

// Update lightbox photo when navigating
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

function checkScreenWidth() {
  if (window.innerWidth >= 768) {
    productThumbnailMain.addEventListener("click", handleThumbnailClick);
  } else {
    productThumbnailMain.removeEventListener("click", handleThumbnailClick);
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

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

  if (productThumbnailMain && newMainThumbnail) {
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

// Function to update the main photo
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

// Function to update the lightbox photo
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

// Function to update button states (disable when at the start or end)
function updateButtonStates(previousButton, nextButton, length) {
  previousButton.disabled = currentPhotoIndex === 0;
  nextButton.disabled = currentPhotoIndex === length - 1;
}

function handleThumbnailClick() {
  displayLightBox.classList.remove("hidden");
}
