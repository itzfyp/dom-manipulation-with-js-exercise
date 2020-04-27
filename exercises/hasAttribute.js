/**
 * hasAttibute()
 * 
 * expects : name of attribute
 *
 * returns :
 *    true - attribute available 
 *    false  - if no attribute available in el
 *
 */

let menu = document.querySelector("#menu");

console.log("menu without attibute::", menu);

menu.setAttribute("name", "menu");

console.log("menu with new attribute ::", menu);


const attVal = menu.getAttribute("name");

console.log("Get Attriubte get value ::", attVal);

// Check value of Attribute from Element

if(menu.hasAttribute("name")){
  menu.removeAttribute("name");
}


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
