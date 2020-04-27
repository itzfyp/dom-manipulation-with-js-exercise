/**
 * appenChild()
 *  - Set HTLM Content at the end of parent Element
 */

// Function to generate LI
function createMenuItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

const menu = document.getElementById("menu");

// add menu item
menu.appendChild(createMenuItem("Home"));
menu.appendChild(createMenuItem("Services"));
menu.appendChild(createMenuItem("About Us"));

// if we try to add existing node in list
// it will move the existing node position to current poistion
// it does't create new el
menu.appendChild(menu.firstElementChild);

// HTML to play above code
/*

<!DOCTYPE html>
<html>
  <head>
    <title>Dom Manipulation : Create</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <ul id="menu">
    </ul>
    <script src="src/index.js"></script>
  </body>
</html>

 */
