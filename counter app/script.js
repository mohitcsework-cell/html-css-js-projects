//javascript
// Get elements from HTML
let count = document.querySelector("#count");

let increaseBtn = document.querySelector("#increase");
let decreaseBtn = document.querySelector("#decrease");
let resetBtn = document.querySelector("#reset");

// Starting count
let value = 0;


// Increase button
increaseBtn.addEventListener("click", function () {
    value++;
    count.innerText = value;
});


// Decrease button
decreaseBtn.addEventListener("click", function () {
    value--;
    count.innerText = value;
});


// Reset button
resetBtn.addEventListener("click", function () {
    value = 0;
    count.innerText = value;
});

