/**
 * removeChild()
 *
 * expects : a agrgument of childNode to remove
 *
 * returns :  removed node
 *
 * if not found : throws erro
 */

let menu = document.querySelector("#menu");

// remove last element from list
// const lastEl = menu.lastElementChild;

//remove some modle element
const middleEl = menu.querySelectorAll("li")[2];

//Error scenario :
//const errorEL = menu;

// remove child
menu.removeChild(middleEl);

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
