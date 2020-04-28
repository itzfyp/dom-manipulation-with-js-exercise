import "./styles.css";

const parent = document.querySelector('#parent');
const child = document.querySelector('#child');


// First way to register listeners with DOM events;
parent.addEventListener('click', function(e){
 
 console.log('parent', this); 
},false);

child.addEventListener('click', function(e){
 
 console.log('child', this); 
},false);

child.addEventListener('click', function(e){
 
 console.log('child 2', e.eventPhase); 
},false);


// Second way to register listeners with DOM events;
// const btn = document.getElementById('btn');

// btn.onclick = function() {
//   console.log('prosp injection ::', this);
// }

// btn.onclick = null;


// Third way to register listeners with DOM events;
//  events and scropes have to be passed as arguments
function showAlert(value,e, _this) {
    console.log(value,'Clicked!', _this.id);
}

function showAlert2(value,e) {
    console.log(value,'Clicked! 2', e.bubbles);
}

window.showAlert = showAlert;
window.showAlert2 = showAlert2;


// HTML to play with this code

/* 
<!DOCTYPE html>
<html>
  <head>
    <title>Dom Manipulation : Create</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <div class="main" id="parent">
      parent element
      <div class="child-el" id="child">Child element</div>
    </div>
    <input id="btn" type="button" value="Save" onclick="showAlert(value,event)">

    <script src="src/index.js"></script>
  
  </body>
</html>


*/