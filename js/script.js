// variables related to changing overall font sizes
const root = document.querySelector(":root");
const sizeDecrease = document.getElementById("decrease-size");
const sizeIncrease = document.getElementById("increase-size");
const sizeReset = document.getElementById("reset-size");

const decreaseFontSize = e => {
  e.preventDefault();
  root.style.fontSize = "14px";
};

const increaseFontSize = e => {
  e.preventDefault();
  root.style.fontSize = "20px";
};

const resetFontSize = e => {
  e.preventDefault();
  root.style.fontSize = "16px";
};

sizeDecrease.addEventListener("click", decreaseFontSize, false);
sizeIncrease.addEventListener("click", increaseFontSize, false);
sizeReset.addEventListener("click", resetFontSize, false);

// variables related to choosing color theme
const changeTheme = document.getElementById("change-theme");
const normalTheme = document.getElementById("original-theme");
const specialTheme = document.getElementById("special-theme");

const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const h4 = document.querySelectorAll("h4");
const h5 = document.querySelectorAll("h5");
const p = document.querySelectorAll("p");
const li = document.querySelectorAll("li");
const a = document.querySelectorAll("a");
const navbar = document.querySelector(".main-navigation");
const footer = document.querySelector("footer");
const utilityBar = document.querySelector(".utility-bar");

function normalColorTheme() {
  var i;
  for (i = 0; i < 1000; i++) {
    p[i].style.color = "white";
    navbar.setAttribute("style", "background-color: #1d3f6c !important");
    footer.setAttribute("style", "background-color: #2f3033 !important");
    utilityBar.setAttribute("style", "background-color: #4c151b !important");
  }
}

function specialColorTheme() {
  var i;
  for (i = 0; i < 1000; i++) {
    navbar.setAttribute("style", "background-color: #920c17 !important");
    footer.setAttribute("style", "background-color: #920c17 !important");
    utilityBar.setAttribute("style", "background-color: #87222a !important");
  }
}

// chooseTheme.addEventListener("change", chooseColorTheme, false);
normalTheme.addEventListener("click", normalColorTheme, false);
specialTheme.addEventListener("click", specialColorTheme, false);
