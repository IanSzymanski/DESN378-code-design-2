const toggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", savedTheme);
console.log("Current theme is:", savedTheme);

toggle.addEventListener("click", function () {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    console.log("Theme changed to:", newTheme);

    localStorage.setItem("theme", newTheme);
});