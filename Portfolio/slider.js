var containerNova = document.getElementById("img-container-nova");
var imageCountNova = document.querySelectorAll(
  "#img-container-nova img"
).length;
var imageCountNova2 = document.querySelectorAll("#img-container-nova img");
var nextNova = document.getElementById("next"); // Next button
var prevNova = document.getElementById("prev"); // Prev button
var indexNova = 0; // Array index

const changeText = document.getElementById("img-text"); //text controller
const changeLink = document.getElementById("img-link"); //link controller

/* Check if next/prev image is within scope, if so, move index up or down */
nextNova.onclick = () => {
  if (indexNova < imageCountNova - 3) {
    (containerNova.style.transition = "transform 0.5s ease-in-out"),
      sliderShiftNova(1);
  } else {
    (containerNova.style.transition = "transform 2.5s"), sliderShiftNova(-3);
  }
}; // Next onclick
prevNova.onclick = () => {
  if (indexNova > 0) sliderShiftNova(-1);
}; // Prev onclick

/* Count index up or down > calculate amount to shift >shift image-container */
function sliderShiftNova(i) {
  indexNova = indexNova + i; // Increase/decrease index
  shift = ((containerNova.clientWidth * 1.02) / 3) * indexNova; // Calculate shift
  containerNova.style.transform = "translatex(" + -shift + "px)"; // Move image-container according to shift
  if (indexNova == 0) {
    changeLink.setAttribute(
      "href",
      "../OliverBoesen MHK-RETTET main MHK/index.html"
    );
    imageCountNova2[0].style.opacity = "0.4";
    imageCountNova2[1].style.opacity = "1";
    imageCountNova2[2].style.opacity = "0.4";
    imageCountNova2[4].style.opacity = "0.4";
    changeText.innerText = "2.Semester Eksamen ";
  } else if (indexNova == 1) {
    changeLink.setAttribute("href", "../UX-UI/index.html");
    imageCountNova2[1].style.opacity = "0.4";
    imageCountNova2[2].style.opacity = "1";
    imageCountNova2[3].style.opacity = "0.4";
    changeText.innerText = "2.Semester Projekt ";
  } else if (indexNova == 2) {
    changeLink.setAttribute("href", "../Eksamen/index.html");
    imageCountNova2[2].style.opacity = "0.4";
    imageCountNova2[3].style.opacity = "1";
    imageCountNova2[4].style.opacity = "0.4";
    changeText.innerText = "1.Semester Eksamen";
  } else if (indexNova == 3) {
    changeLink.setAttribute("href", "../Interaktiv storytelling/index.html");
    imageCountNova2[3].style.opacity = "0.4";
    imageCountNova2[4].style.opacity = "1";
    imageCountNova2[5].style.opacity = "0.4";
    changeText.innerText = "Storytelling Projekt";
  }
}
