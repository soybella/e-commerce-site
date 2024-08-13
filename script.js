let productThumbnailSmall = document.querySelectorAll(".photo");

let productThumbnail = document.querySelectorAll(".product-small-wrapper");

let productThumbnailSmallLightBox =
  document.querySelectorAll(".photo-light-box");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const closeNavBar = document.querySelector("#navbar-close-button");
const shoppingCartButton = document.querySelector(".nav-cart");
const navBarIcon = document.querySelector(".nav-menu-icon");
let displayLightBox = document.querySelector(".light-box");
let closeLightBox = document.querySelector("#light-box-close-button");
let productThumbnailMain = document.querySelector(".product-thumbnail-main");
let productThumbnailMainLightbox = document.querySelector(
  ".light-box .product-thumbnail-main"
);
let currentPhotoIndex = 0;

closeNavBar.addEventListener("click", handleCloseNavBar);
navBarIcon.addEventListener("click", handleNavBarIcon);
shoppingCartButton.addEventListener("click", handleShoppingCartButton);
// next do shopping cart add to cart and quantity functionality

closeLightBox.addEventListener("click", () => {
  displayLightBox.classList.add("hidden");
});

function handleThumbnailClick() {
  displayLightBox.classList.remove("hidden");
}

function checkScreenWidth() {
  if (window.innerWidth >= 768) {
    productThumbnailMain.addEventListener("click", handleThumbnailClick);
  } else {
    productThumbnailMain.removeEventListener("click", handleThumbnailClick);
  }
}
checkScreenWidth();
window.addEventListener("resize", checkScreenWidth);

previousButton.addEventListener("click", () => {
  //   console.log("previous button");
  //   console.log(currentPhotoIndex);
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    updatePhoto();
  }
});

// Figure out why the photos in small screen sizes wont change when pressing next and previous buttons
nextButton.addEventListener("click", () => {
  //   console.log("next button");
  //   console.log(currentPhotoIndex);
  if (currentPhotoIndex < productThumbnailSmall.length - 1) {
    currentPhotoIndex++;
    updatePhoto();
  }
});

// Make click function for lightbox thumbnails
productThumbnail.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("photo")) {
      console.log("main thumbnail");
      console.log(currentPhotoIndex);
      currentPhotoIndex = index;
      updatePhoto();
    } else {
      console.log("lightbox thumbnail");
      console.log(currentPhotoIndex);
      currentPhotoIndex = index;
      updatePhotoLightBox();
    }
  });
});

productThumbnailSmall.forEach((thumbnail) => {
  thumbnail.addEventListener("click", handleProductThumbnailSmall);
});

productThumbnailSmallLightBox.forEach((thumbnail) => {
  thumbnail.addEventListener("click", handleProductThumbnailSmallLightBox);
});

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

function updatePhotoLightBox() {
  let photosLightBox = document.querySelectorAll(".photo-light-box");

  let newPhotoSrcLightBox =
    productThumbnailSmallLightBox[currentPhotoIndex].getAttribute(
      "data-large-src"
    );

  let newMainPhotoLightBox = Array.from(photosLightBox).find(
    (photo) => photo.getAttribute("data-large-src") === newPhotoSrcLightBox
  );

  if (newPhotoSrcLightBox) {
    productThumbnailMainLightbox.src = newMainPhotoLightBox;
  } else {
    return newPhotoSrcLightBox;
  }

  if (currentPhotoIndex === 0) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  if (currentPhotoIndex === photosLightBox.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
updatePhotoLightBox();

function updatePhoto() {
  let newPhotoSrc =
    productThumbnailSmall[currentPhotoIndex].getAttribute("data-large-src");

  let photos = document.querySelectorAll(".photo");

  let newMainPhoto = Array.from(photos).find(
    (photo) => photo.getAttribute("data-large-src") === newPhotoSrc
  );

  if (newMainPhoto) {
    productThumbnailMain.src = newPhotoSrc;
  } else {
    return newPhotoSrc;
  }

  if (currentPhotoIndex === 0) {
    previousButton.disabled = true;
  } else {
    previousButton.disabled = false;
  }

  if (currentPhotoIndex === photos.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
updatePhoto();
