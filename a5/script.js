var myImages = [
  "https://images.stockcake.com/public/3/0/7/3073d21f-6570-40c8-bcb2-4fe2a52f2075_large/dolphin-leaping-gracefully-stockcake.jpg",
  "https://img.freepik.com/premium-photo/pod-dolphins-swim-through-crystal-clear-turquoise-water-sunny-day-peaceful-scene-pod-graceful-dolphins-gracefully-gliding-through-crystalclear-waters_538213-113059.jpg",
  "https://www.shutterstock.com/image-photo/underwater-world-coral-fishes-red-600nw-1729611484.jpg",
  "https://cdn.sanity.io/images/esqfj3od/production/711f94b13110a1972a55f8bb40fdbfb0bbbf99f2-1080x720.webp?w=3840&q=65&fit=clip&auto=format",
  "https://www.shutterstock.com/shutterstock/videos/3681670457/thumb/1.jpg?ip=x480"
];

var captionImages = [
  "A joyful dolphin leaping above the waves on a sunny day.",
  "A pod of dolphins chilling under crystal-clear tropical waters.",
  "A dolphin swimming in a coral reef with turtle swimming nearby.",
  "Two dolphins swimming side-by-side in deep ocean blue.",
  "A playful dolphin performing at a marine show."
];

var altText = [
  "Dolphin jumping playfully in the ocean",
  "Multiple dolphins swimming in clear water",
  "Dolphin near coral reef with tropical fish",
  "Two dolphins in open ocean",
  "Dolphin performing during marine show"
];

var index = 0;
var timer = 4;
var intervalID;

function updateImage() {
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt = altText[index];
  document.getElementById("caption").textContent = captionImages[index];
}

function next() {
  index = (index + 1) % myImages.length;
  resetTimer();
  updateImage();
}

function back() {
  index = (index - 1 + myImages.length) % myImages.length;
  resetTimer();
  updateImage();
}

function resetTimer() {
  timer = 4;
  if (document.getElementById("auto").checked) {
    clearInterval(intervalID);
    intervalID = setInterval(countdown, 1000);
  }
}

function countdown() {
  timer--;
  document.getElementById("timer").textContent = timer;
  if (timer <= 0) {
    next();
  }
}

document.getElementById("next").addEventListener("click", next);
document.getElementById("previous").addEventListener("click", back);

document.getElementById("auto").addEventListener("change", function () {
  if (this.checked) {
    resetTimer();
  } else {
    clearInterval(intervalID);
  }
});

// Initialize
updateImage();
document.getElementById("timer").textContent = timer;

