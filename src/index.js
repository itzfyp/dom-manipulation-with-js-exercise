import "./styles.css";

// Sample : Creatge Header element with some text
function CreateHader() {
  // ELement
  const headerEl = document.createElement("H1");

  headerEl.id = "app-title";

  // headerEl.textContent = "Dom manipulation";

  // Text Node
  const headerTxtEl = document.createTextNode("Dom Manipulation");

  headerEl.appendChild(headerTxtEl);

  const bodyEl = document.querySelector("body");

  bodyEl.appendChild(headerEl);
}

CreateHader();

function SetStylesForTitle() {
  const headerEl = document.querySelector("#app-title");
  headerEl.setAttribute("class", "header-txt");
}

SetStylesForTitle();

function UpdateClassForTitle() {
  const headerEl = document.querySelector("#app-title");
  const className = headerEl.getAttribute("class");
  if (className === "header-txt") {
    headerEl.setAttribute("class", "header-txt active");
  }
}

UpdateClassForTitle();

// Sample : Create Script tag from JS
function CreateScript() {
  const scriptEl = document.createElement("script");
  scriptEl.src = "./src/index.js";
  scriptEl.async = true;
  document.body.appendChild(scriptEl);
}

CreateScript();
