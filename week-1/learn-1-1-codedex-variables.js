// ============================================
// TUTORIAL 1-0: CODEDEX VARIABLES
// Student: Ian Szymanski
// Date: 1/13/2026
// ============================================
​
// --------------------------------------------
// EXERCISE 6: LET & CONST
// Create 4 variables for a user profile:
// - Two const variables 
// - Two let variables 
// Print them all, then reassign one let variable
// --------------------------------------------
const firstName = "Ian";
const favoriteColor = "Aqua";
let currentLocation = "Spokane";
let currentMood = "Cooked";

console.log(firstName);
console.log(favoriteColor);
console.log(currentLocation);
console.log(currentMood);

currentLocation = "Liberty Lake"
currentMood = "Based"

console.log(currentLocation);
console.log(currentMood);
// --------------------------------------------
// EXERCISE 7: DATA TYPES
// Create variables for your favorite company:
// 
// Print them all
// --------------------------------------------
​const companyName = "Monster";
const foundingYear = 1935;
let isActive = true;
let fundingAmount;
// --------------------------------------------
// EXERCISE 8: TEMPERATURE
// Convert Spokane's temperature from °F to °C
// Formula: (fahrenheit - 32) / 1.8
// --------------------------------------------
let inputTemp = 41;
let outputTemp = ((inputTemp - 32)/1.8);

console.log(outputTemp);
// --------------------------------------------
// EXERCISE 9: TIP CALCULATOR
// Calculate tip and total from a bill
// - billAmount, tipPercent
// - tipAmount = billAmount * (tipPercent / 100)
// - total = billAmount + tipAmount
// --------------------------------------------
const billAmount = 50;
const tipPercent = 18;

let tipAmount = billAmount * (tipPercent / 100);
let total = billAmount + tipAmount;

console.log("----- Receipt -----");
console.log("Bill Amount: $" + billAmount);
console.log("Tip Percentage: " + tipPercent + "%");
console.log("Tip Amount: $" + tipAmount);
console.log("Total: $" + total);
console.log("-------------------");
// --------------------------------------------
// EXERCISE 10: PLAYLIST DURATION
// Calculate total playlist length
// - numberOfSongs, avgSongLength (in minutes)
// - totalMinutes, hours, remainingMinutes
// Format the output nicely
// --------------------------------------------
const numberOfSongs = 68;
const averageSongLength = 4;

let totalMinutes = numberOfSongs * averageSongLength;
let hours = Math.floor(totalMinutes / 60);
let minutes = totalMinutes % 60;

console.log("----- Playlist Summary -----");
console.log("Number of Songs: " + numberOfSongs);
console.log("Average Song Length: " + averageSongLength + " minutes");
console.log("Total Duration: " + totalMinutes + " minutes");
console.log("Which is: " + hours + " hours and " + minutes + " minutes");
console.log("----------------------------");