
const myHeading = document.querySelector("h1");
//This means that forever and ever, the text content of anything that is h1 will be known as myHeading. This is a variable that can be used to change the text content of the h1 element on the page.
myHeading.textContent = "Hello world!";
//This function changes what myHeading is, no matter what it was before.

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Landscape.png") {
    myImage.setAttribute("src", "images/Food.png");
  } else {
    myImage.setAttribute("src", "images/Landscape.png");
  }
});