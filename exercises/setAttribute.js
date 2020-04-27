/**
 * setAttibute()
 *
 * expects : {key : value}
 *
 * key : all values will be converted to lowercase
 * 
 * value : attribute value
 *
 * if values is empty and if its boolean based attribute

 * returns :  undefined
 *
 */

let menu = document.querySelector("#menu");

console.log("menu without attibute::", menu);

menu.setAttribute("name", "menu");

console.log("menu with new attribute ::", menu);

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
