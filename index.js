/* HOME */
const onePointHome = document.getElementById("1-pt-h");
const twoPointsHome = document.getElementById("2-pts-h");
const threePointsHome = document.getElementById("3-pts-h");
const scoreHome = document.getElementById("score-home");
let scoreHomeTracker = 0;

/* GUEST */
const onePointGuest = document.getElementById("1-pt-g");
const twoPointsGuest = document.getElementById("2-pts-g");
const threePointsGuest = document.getElementById("3-pts-g");
const scoreGuest = document.getElementById("score-guest");
let scoreGuestTracker = 0;

console.log("HOME\n----");
console.log(onePointHome.innerText);
console.log(twoPointsHome.innerText);
console.log(threePointsHome.innerText);
console.log(scoreHome.innerText);
console.log(scoreHomeTracker);
console.log("\nGUEST\n-----");
console.log(onePointGuest.innerText);
console.log(twoPointsGuest.innerText);
console.log(threePointsGuest.innerText);
console.log(scoreGuest.innerText);
console.log(scoreGuestTracker);

onePointHome.addEventListener("click", (event) => {
  scoreHomeTracker += 1;
  scoreHome.innerText = scoreHomeTracker
  console.log("Score Home: " + scoreHome.innerText);
});

twoPointsHome.addEventListener("click", (event) => {
  scoreHomeTracker += 2;
  scoreHome.innerText = scoreHomeTracker
  console.log("Score Home: " + scoreHome.innerText);
});

threePointsHome.addEventListener("click", (event) => {
  scoreHomeTracker += 3;
  scoreHome.innerText = scoreHomeTracker
  console.log("Score Home: " + scoreHome.innerText);
});

onePointGuest.addEventListener("click", (event) => {
  scoreGuestTracker += 1;
  scoreGuest.innerText = scoreGuestTracker
  console.log("Score Guest: " + scoreGuest.innerText);
});

twoPointsGuest.addEventListener("click", (event) => {
  scoreGuestTracker += 2;
  scoreGuest.innerText = scoreGuestTracker
  console.log("Score Guest: " + scoreGuest.innerText);
});

threePointsGuest.addEventListener("click", (event) => {
  scoreGuestTracker += 3;
  scoreGuest.innerText = scoreGuestTracker
  console.log("Score Guest: " + scoreGuest.innerText);
});
