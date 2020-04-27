/**
 * insertAfter()
 *
 *  DOM doesnt support insertAfter feature directlhy
 * So we need to achive it via insertfore with nextSibling
 *
 */

let menu = document.querySelector("#menu");

function first() {
  let newEl = document.createElement("li");

  newEl.textContent = "First Element";

  // add before first element from list
  const firstEl = menu.firstElementChild;

  // NextSibling is key to achive insertAfter
  menu.insertBefore(newEl, firstEl.nextSibling);
}

first();

function middle() {
  let newEl = document.createElement("li");

  newEl.textContent = "Middle Element";

  // add before last element from list
  const lastEl = menu.lastElementChild;

  // NextSibling is key to achive insertAfter
  menu.insertBefore(newEl, lastEl.nextSibling);
}

middle();

function notFound() {
  let newEl = document.createElement("li");

  newEl.textContent = "Not Found Element";

  // if no existing node found;
  menu.insertBefore(newEl, null);
}

notFound();

// HTML to play with above code
/*
<!DOCTYPE html>
<html>
  <head>
    <title>Dom Manipulation : Create</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <ul id="menu">
      <li>Homepage</li>
      <li>Services</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <script src="src/index.js"></script>
  </body>
</html>

 */
