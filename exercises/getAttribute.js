/**
 * getAttibute()
 *
 * returns :
 *    value - attribute value
 *    null  - if no attribute available in el
 *
 */

let menu = document.querySelector("#menu");

console.log("menu without attibute::", menu);

menu.setAttribute("name", "menu");

console.log("menu with new attribute ::", menu);

// Get value of Attribute from Element

const attVal = menu.getAttribute("name");

console.log("Get Attriubte get value ::", attVal);

// HTML to play with code
/*

<!DOCTYPE html>
<html>
  <head>
    <title>Dom Manipulation : Create</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="menu">Menu area</div>
    <script src="src/index.js"></script>
  </body>
</html>

*/
