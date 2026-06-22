// Get HTML elements
const feedbackForm = document.getElementById("feedback-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");
const charCount = document.getElementById("charCount");
const message = document.getElementById("message");
const feedbackDisplay = document.getElementById("feedback-display");


// =========================
// Character Counter (Step 3)
// =========================
commentsInput.addEventListener("input", function () {
    charCount.textContent = "Characters: " + commentsInput.value.length;
});


// =========================
// Tooltip Function
// =========================
function showTooltip(text) {
    message.textContent = text;
}


// =========================
// Tooltips (mouseover / mouseout)
// =========================
nameInput.addEventListener("mouseover", function () {
    showTooltip("Enter your full name.");
});

nameInput.addEventListener("mouseout", function () {
    message.textContent = "";
});

emailInput.addEventListener("mouseover", function () {
    showTooltip("Enter a valid email address.");
});

emailInput.addEventListener("mouseout", function () {
    message.textContent = "";
});

commentsInput.addEventListener("mouseover", function () {
    showTooltip("Write your feedback here.");
});

commentsInput.addEventListener("mouseout", function () {
    message.textContent = "";
});


// =========================
// Form Validation + Feedback Display
// =========================
feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (
        nameInput.value === "" ||
        emailInput.value === "" ||
        commentsInput.value === ""
    ) {
        message.textContent = "Please fill out all fields.";
        return;
    }

    // Create feedback entry
    const entry = document.createElement("div");
    entry.classList.add("feedback-entry");

    entry.textContent =
        "Name: " + nameInput.value + "\n" +
        "Email: " + emailInput.value + "\n" +
        "Comments: " + commentsInput.value;

    feedbackDisplay.appendChild(entry);

    // Reset form
    feedbackForm.reset();
    charCount.textContent = "Characters: 0";
    message.textContent = "";
});


// =========================
// Step 6: Event Delegation
// =========================
feedbackForm.addEventListener("input", function (event) {
    const target = event.target;

    if (target.id === "name") {
        console.log("Typing in name field");
    }

    if (target.id === "email") {
        console.log("Typing in email field");
    }

    if (target.id === "comments") {
        console.log("Typing in comments field");
    }
});


// =========================
// Step 7: stopPropagation
// =========================
document.body.addEventListener("click", function () {
    message.textContent = "Clicked outside form";
});

feedbackForm.addEventListener("click", function (event) {
    event.stopPropagation();
});