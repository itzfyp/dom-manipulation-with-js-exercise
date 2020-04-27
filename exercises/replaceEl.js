// HTML to interact

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

let menu = document.querySelector("#menu");

// Create new LI
const newEl = document.createElement("li");

newEl.textContent = "Home";

// Replcae first LI with new Created LI
menu.replaceChild(newEl, menu.firstElementChild);

// replaceChild

// Requires two arguments

// new Element

// old Element
