let menu = document.querySelector("#menu");

// Create new LI
const newEl = document.createElement("li");

newEl.textContent = "Home";

// Replcae first LI with new Created LI
menu.replaceChild(newEl, menu.firstElementChild);
