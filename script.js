/* -----------------------
   Part 2: Functions demo
----------------------- */

// Global variable
let animationCount = 0;

// Function with parameters and return value
function multiply(a, b) {
  return a * b;
}

// Function using local scope
function logMessage(msg) {
  let prefix = "📢 Message:";
  console.log(prefix, msg);
  document.getElementById("output").innerText = prefix + " " + msg;
}

/* -----------------------
   Part 3: Combining CSS + JS
----------------------- */
const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");
const resetBtn = document.getElementById("resetBtn");

animateBtn.addEventListener("click", () => {
  box.classList.add("animate");
  animationCount++;

  // Use function with return value
  const doubled = multiply(animationCount, 2);
  logMessage(`Box animation started! Triggered ${animationCount} times (x2 = ${doubled})`);
});

resetBtn.addEventListener("click", () => {
  box.classList.remove("animate");
  logMessage("Box reset to default state.");
});
