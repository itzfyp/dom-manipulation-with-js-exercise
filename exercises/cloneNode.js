/**
 * cloneNode()
 *
 * expects : deep { false / true }
 *
 * deep : true - it will clone all descendent elements
 *
 * deep : false - clone this element only
 *
 * when we clone - below things will be cloned with el
 *
 *  - styles
 *  - events registred via attribute {onclick...}
 *
 *  - DONT clone listeners registered via addEventListeners
 *
 * returns :  cloned node
 *
 */

let menu = document.querySelector("#menu");

console.log("menu ::", menu);

const newMenu = menu.cloneNode();

console.log("new menu ::", newMenu);

// HTML to play with code
/*

<!DOCTYPE html>
<html>
  <head>
    <title>Dom Manipulation : Create</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <ul id="menu"></ul>
    <script src="src/index.js"></script>
  </body>
</html>

*/
