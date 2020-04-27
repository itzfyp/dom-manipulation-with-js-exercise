/**
 * innerText
 *  - Get / Set Text Content from/to Element
 *  - it will conside css styles applied for the el
 *
 */

// Get all texts from element using innerText

const div = document.getElementById("note");

// In console, we are able to see only div content
// span was hidden by css
// As innerText consider about css, it will not show span text
console.log(div.innerText);

// Set text via innerText

div.innerText = "replaced with new text";

// Now in Console, we ca see only last updated text
// rest of exisitng conent will be replaced with this new text
console.log(div.innerText);

// HTML to play with above code
/* 

<!DOCTYPE html>
<html>
  <head>
    <title>Dom Manipulation : Create</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="note">
      JavaScript textContent Demo!
      <span style="display:none">Hidden Text!</span>
      <!-- my comment -->
    </div>
    <script src="src/index.js"></script>
  </body>
</html>
*/
