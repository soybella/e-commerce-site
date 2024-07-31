const productThumbnailSmall = document.querySelectorAll(
  "main .product-small-wrapper"
);
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const closeNavBar = document.querySelector("#navbar-close-button");
const shoppingCartButton = document.querySelector(".nav-cart");
const navBarIcon = document.querySelector(".nav-menu-icon");
let displayLightBox = document.querySelector(".light-box");
let closeLightBox = document.querySelector("#light-box-close-button");
let productThumbnailMain = document.querySelector(".product-thumbnail-main");
let currentPhotoIndex = 0;

closeNavBar.addEventListener("click", handleCloseNavBar);
navBarIcon.addEventListener("click", handleNavBarIcon);
shoppingCartButton.addEventListener("click", handleShoppingCartButton);

closeLightBox.addEventListener("click", () => {
  displayLightBox.classList.add("hidden");
});

function handleThumbnailClick() {
  displayLightBox.classList.remove("hidden");
}

//  NEXT, IF MAIN THUMBNAIL IS CLICKED, LIGHT BOX SHOULD SHOW THAT IMAGE AS THE MAIN WHEN CLICKED

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
  if (currentPhotoIndex > 0) {
    currentPhotoIndex--;
    updatePhoto();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPhotoIndex < productThumbnailSmall.length - 1) {
    currentPhotoIndex++;
    updatePhoto();
  }
});

productThumbnailSmall.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentPhotoIndex = index;
    updatePhoto();
  });
});

productThumbnailSmall.forEach((thumbnail) => {
  thumbnail.addEventListener("click", handleProductThumbnailSmall);
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
  //   let productThumbnailMain = document.querySelector(".product-thumbnail-main");

  if (productThumbnailMain && newMainThumbnail) {
    productThumbnailMain.src = newMainThumbnail;
  }
}

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

  if (currentPhotoIndex === productThumbnailSmall.length - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
}
updatePhoto();
