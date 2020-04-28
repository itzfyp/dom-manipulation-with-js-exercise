import "./styles.css";

const el = document.querySelector('#style-el');

// Set Style by Props
el.style.color = 'red';
el.style['background-color'] = "#cfcfcf";

// Set Style using cssText
// replace all inline stylesa and apply below one
el.style.cssText = "font-size:19px;"

// This will append styles with existing inline style
el.style.cssText += "font-size:19px;"


//Get Style : inline style onlye
console.log(el.style);


//Get all styles include from css file

console.log(window.getComputedStyle(el).padding);

//HTML for this code
/* 
<!DOCTYPE html>
<html>
  <head>
    <title>Dom Manipulation : Create</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div id="style-el" style="color:blue">Get Set Style</div>
    <script src="src/index.js"></script>
  </body>
</html>

*/

// Style for this code
/* 
#style-el {

  padding: 10px;
}
*/