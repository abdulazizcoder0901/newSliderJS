const container = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");

let offset = 0;
let slideIncrement = 0;
let slideDecremnt = slides.length - 1;

arrRight.addEventListener("click", () => {
  offset = slides[0].offsetWidth;
  container.style.transition = "left ease-in-out 500ms";
  container.style.left = -offset + "px";

  setTimeout(() => {
    container.style.transition = "none";
    slides[slideIncrement].style.order = slides.length -1;

    container.style.left = 0;
    slideIncrement++;
    slideDecremnt = slideIncrement - 1

    if (slideIncrement === slides.length) {
      slideIncrement = 0;

      slides.forEach((slide) => {
        slide.style.order = 0;
      });
    }
  }, 500);
});

arrLeft.addEventListener("click", () => {
  offset = slides[0].offsetWidth;

  container.style.transition = "none";

  if (slideDecremnt < 0) {
    slides.forEach((slide) => {
      slide.style.order = 0;
    });
    slideDecremnt = slides.length - 1;
  }

  slides[slideDecremnt].style.order = "-1";
  container.style.left = -offset + "px";

  setTimeout(() => {
    container.style.transition = "left ease-in-out 500ms";
    container.style.left = 0;
  }, 1);

  setTimeout(() => {
    slideDecremnt--;
    slideIncrement = slideDecremnt + 1;
  }, 500);
});