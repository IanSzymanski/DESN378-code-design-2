const toggle = document.querySelector(".theme-toggle");

let savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
    let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    savedTheme = prefersDark ? "dark" : "light";
}

document.documentElement.setAttribute("data-theme", savedTheme);
console.log("Current theme is:", savedTheme);

toggle.addEventListener("click", function () {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    let newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("Theme changed to:", newTheme);
});