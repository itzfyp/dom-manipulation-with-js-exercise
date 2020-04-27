// Sample : Creatge Header element with some text
function CreateHader() {
  // ELement
  const headerEl = document.createElement("H1");

  headerEl.id = "app-title";

  // Text Node
  const headerTxtEl = document.createTextNode("Dom Manipulation");

  headerEl.appendChild(headerTxtEl);

  const bodyEl = document.querySelector("body");

  bodyEl.appendChild(headerEl);
}

CreateHader();

// Sample : Create Script tag from JS
function CreateScript() {
  const scriptEl = document.createElement("script");
  scriptEl.src = "./src/index.js";
  scriptEl.async = true;
  document.body.appendChild(scriptEl);
}

CreateScript();

function CreateLink() {
  const link = document.createElement("A");
  link.href = "https://linkedin.com";
  link.textContent = "Link to linkedIn";
  link.target = "_blank";
  document.body.appendChild(link);
}

CreateLink();
