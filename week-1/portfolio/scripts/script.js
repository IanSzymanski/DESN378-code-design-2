const dropdown = document.querySelector(".theme-dropdown");
const trigger = document.querySelector(".theme-trigger");

trigger.addEventListener("click", function (event) {
  event.stopPropagation();
  dropdown.classList.toggle("open");
});

document.addEventListener("click", function (event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove("open");
  }
});

const saved = localStorage.getItem("theme");
const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.dataset.theme = !saved || saved === "system" ? (osDark ? "dark" : "light") : saved;

const systemBtn = document.querySelector("button[data-theme='system']");
const lightBtn = document.querySelector("button[data-theme='light']");
const darkBtn = document.querySelector("button[data-theme='dark']");

lightBtn.addEventListener("click", function () {
  document.documentElement.dataset.theme = "light";
  localStorage.setItem("theme", "light");
  dropdown.classList.remove("open");
});

darkBtn.addEventListener("click", function () {
  document.documentElement.dataset.theme = "dark";
  localStorage.setItem("theme", "dark");
  dropdown.classList.remove("open");
});

systemBtn.addEventListener("click", function () {
  localStorage.setItem("theme", "system");
  const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (osDark) {
    document.documentElement.dataset.theme = "dark";
  } else {
    document.documentElement.dataset.theme = "light";
  }
  dropdown.classList.remove("open");
});