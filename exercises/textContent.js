/**
 * textContent
 *  - Get / Set Text Content from/to Element
 *  - Doesnt conside css styles applied for the el
 *
 */

// Get all texts from element using textConent

const div = document.getElementById("note");

// In console, we can see both inner text value of div el and span
// span was hidden by css
// But textContent doesnt care about CSS
console.log(div.textContent);

// Set text via textConent

div.textContent = "replaced with new text";

// Now in Console, we ca see only last updated text
// rest of exisitng conent will be replaced with this new text
console.log(div.textContent);

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
