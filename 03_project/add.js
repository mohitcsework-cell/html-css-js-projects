const quotes = [
    "Believe in yourself",
    "Never give up",
    "Success is the sum of small efforts",
    "Dream big and work hard",
    "Keep learning and keep growing",
    "Your only limit is your mind",
    "Do something today that your future self will thank you for",
    "Great things take time",
    "Stay positive and keep moving forward",
    "Work hard in silence, let success make the noise"
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", () => {

    const index = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[index];

});