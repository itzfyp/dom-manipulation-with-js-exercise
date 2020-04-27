/**
 * insertBefore()
 *
 * expects :  2 arguments
 *  1. new element - to be inserted
 *  2. existing node to insert new el before it
 *
 * returns :  inserted node
 *
 * if its not found existing el, it will append new el at the end of parent node
 */

let menu = document.querySelector("#menu");

function first() {
  let newEl = document.createElement("li");

  newEl.textContent = "First Element";

  // add before first element from list
  const firstEl = menu.firstElementChild;

  menu.insertBefore(newEl, firstEl);
}

first();

function middle() {
  let newEl = document.createElement("li");

  newEl.textContent = "Middle Element";

  // add before last element from list
  const lastEl = menu.lastElementChild;

  menu.insertBefore(newEl, lastEl);
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
