// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: Ian Szymanski
// Date: 1/26/26
// ============================================
​
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
let hour = 11;

if (hour < 12) {
  console.log("Good morning bro, be sure to shower and brush your teeth.");
}
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
let hour = 11;

if (hour < 12) {
  console.log("Good morning bro, be sure to shower and brush your teeth.");
} else {
  console.log('Good afternoon broski, get out of bed you sloth.');
}
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
let ph = 7;

if (ph > 7) {
  console.log('Basic');
} else if (ph < 7) {
  console.log('Acidic');
} else {
  console.log('Neutral');
}
// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
const question = "Question Here";

const randomNumber = Math.floor(Math.random() * 9) + 1;

let answer = "";

if (randomNumber === 1){
  answer = 'Yes - definitely';
} else if (randomNumber === 2) {
  answer = 'It is decidedly so';
} else if (randomNumber === 3) {
  answer = 'Without a doubt';
} else if (randomNumber === 4) {
  answer = 'Reply hazy, try again';
} else if (randomNumber === 5) {
  answer = 'Ask again later';
} else if (randomNumber === 6) {
  answer = 'Better not tell you now';
} else if (randomNumber === 7) {
  answer = 'My sources say no';
} else if (randomNumber === 8) {
  answer = 'Outlook not so good';
} else if (randomNumber === 9) {
  answer = 'Very doubtful';
} else {
  answer = 'Error';
}

console.log("Question: ", question);
console.log("Answer:   ", answer);
// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
let aqi = 150

if (aqi >= 0 && aqi <= 50) {
  console.log('Good');
} else if (aqi >= 51 && aqi <= 100) {
  console.log('Moderate');
} else if (aqi >= 101 && aqi <= 150) {
  console.log('Unhealthy (Sensitive Groups)');
} else if (aqi >= 151 && aqi <= 200) {
  console.log('Unhealthy');
} else if (aqi >= 201 && aqi <= 300) {
  console.log('Very Unhealthy');
} else {
  consle.log('Hazardous');
}
// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
​const player = 1;
const computer = Math.floor(Math.random() * 3);

if (player === 0) {
  if (computer === 0) {
    console.log("Draw");
  } else if (computer === 1) {
    console.log("The computer won!");
  } else if (computer === 2) {
    console.log("The player won!");
  } else {
    console.log("Input a valid number");
  }
} else if (player === 1) {
  if (computer === 0) {
    console.log("The player won!");
  } else if (computer === 1) {
    console.log("Draw");
  } else if (computer === 2) {
    console.log("The computer won!");
  } else {
    console.log("Input a valid number");
  }
} else if (player === 2) {
  if (computer === 0) {
    console.log("The computer won!");
  } else if (computer === 1) {
    console.log("The player won!");
  } else if (computer === 2) {
    console.log("Draw");
  } else {
    console.log("Input a valid number");
  }
} else {
  console.log("Something went wrong");
}