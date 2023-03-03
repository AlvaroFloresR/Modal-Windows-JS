"use: strict";

// QUERY SELECTORS
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const buttonsOpenModal = document.querySelectorAll(".show-modal"); // * Multiple Buttons

// ----------------------------------------------
//          EVENT HANDLERS
// ----------------------------------------------
const openModal_handler = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal_handler = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const keypress_handler = function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal_handler();
  }
};

// ----------------------------------------------
//          EVENT LISTENERS
// ----------------------------------------------

// Open Modal
for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener("click", openModal_handler);
}

// Close Modal on Button Click
closeModal.addEventListener("click", closeModal_handler);

// Close modal on overlay
overlay.addEventListener("click", closeModal_handler);

// Keypress Listener
document.addEventListener("keydown", keypress_handler);
