// Toggle class active for hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active for search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  e.preventDefault();
};

// Toggle class active for shopping cart
const shoppingCartNav = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCartNav.classList.toggle("active");
  e.preventDefault();
};

// Click outside sidebar = nav vanished
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (
    !shoppingCartButton.contains(e.target) &&
    !shoppingCartNav.contains(e.target)
  ) {
    shoppingCartNav.classList.remove("active");
  }
});

// Modal Box
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    const targetModal = document.querySelector(btn.getAttribute("data-target"));
    targetModal.style.display = "flex";
    e.preventDefault();
  };
});

// Click outside modal
window.onclick = (e) => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
};

// Close icon
document.querySelectorAll(".modal .close-icon").forEach((icon) => {
  icon.onclick = (e) => {
    const modal = icon.closest(".modal");
    modal.style.display = "none";
    e.preventDefault();
  };
});
