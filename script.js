// =============================
// Part 1: Variables & Conditionals
// =============================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = prompt("Enter your age:");
  age = parseInt(age);

  if (isNaN(age)) {
    document.getElementById("ageResult").textContent = "Please enter a valid number.";
  } else if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult ✅";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor 🚸";
  }
});

// =============================
// Part 2: Functions
// =============================

// Function 1: Greet user
function greetUser(name) {
  document.getElementById("greetOutput").textContent = "Hello, " + name + "! 👋";
}

// Function 2: Calculate total
function calculateTotal(quantity, price) {
  let total = quantity * price;
  document.getElementById("totalOutput").textContent = 
    `Total for ${quantity} items at Ksh ${price} each is Ksh ${total}`;
}

// =============================
// Part 3: Loops
// =============================
document.getElementById("loopBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous

  // for loop example
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }
});

// =============================
// Part 4: DOM Manipulation
// =============================

// Change text content
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("textTarget").textContent = "🎉 The text has been changed!";
});

// Toggle class highlight
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("highlightTarget").classList.toggle("highlight");
});

// Add new list items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (list.children.length + 1);
  list.appendChild(newItem);
});
