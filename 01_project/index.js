const nextElement = document.querySelector(".next");
const prevElement = document.querySelector(".prev");

const imgContainer = document.querySelector(".img-container");
const images = document.querySelectorAll(".img-container img");

let currentImg = 1;

// Next Button
nextElement.addEventListener("click", () => {
    currentImg++;
    updateImg();
});

// Previous Button
prevElement.addEventListener("click", () => {
    currentImg--;
    updateImg();
});

function updateImg() {

    if (currentImg > images.length) {
        currentImg = 1;
    }

    if (currentImg < 1) {
        currentImg = images.length;
    }

    imgContainer.style.transform =
        `translateX(-${(currentImg - 1) * 500}px)`;
}

// Auto Slide Every 3 Seconds
setInterval(() => {
    currentImg++;
    updateImg();
}, 1000);