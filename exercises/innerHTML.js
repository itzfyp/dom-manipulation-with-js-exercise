/**
 * inneHTML
 *  - Get / Set HTLM Content from/to Element
 */

// Get all content from element using innerHTML

const div = document.getElementById("menu");

// In console, we are able to see only div content
console.log(div.innerHTML);

// Set text via innerText

div.innerHTML = "<li>New Element</li>";

// Now in Console, we ca see only last updated content
// rest of exisitng conent will be replaced with this new text
console.log(div.innerHTML);

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
      <li>Home</li>
      <li style="display:none;">Services</li>
    </ul>
    <script src="src/index.js"></script>
  </body>
</html>

 */
