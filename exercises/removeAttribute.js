/**
 * removeAttibute()
 * 
 * expects : name of attribute
 *
 * returns :
 *    undefined - attribute available and will be removed
 *    err  - if no attribute available in el
 *
 */

let menu = document.querySelector("#menu");

console.log("menu without attibute::", menu);

menu.setAttribute("name", "menu");

console.log("menu with new attribute ::", menu);

// Get value of Attribute from Element

const attVal = menu.getAttribute("name");

console.log("Get Attriubte get value ::", attVal);

menu.removeAttribute("name");

console.log("menu after attr removed::", menu);

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
