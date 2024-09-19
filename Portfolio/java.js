const words = [
  "Multimediedesign Studerende",
  "bor i Aarhus",
  "22 år gamle",
  "lærenem",
  "udadvendt",
]; // Tilføj de ord, du ønsker
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function type() {
  currentWord = words[i];
  typewriterElement.innerHTML = currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(type, 150); // Hastighed for at skrive
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 100); // Hastighed for at slette
  } else {
    isDeleting = !isDeleting;
    i = !isDeleting ? (i + 1) % words.length : i;
    setTimeout(type, isDeleting ? 50 : 500); // Pause mellem ord
  }
}

window.onload = function () {
  type();
};
