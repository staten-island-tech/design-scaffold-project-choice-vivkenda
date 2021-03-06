import "../styles/attractions.css";
import { gsap } from "gsap";

gsap.from(".box", 1, {
  scale: 0.1,
  opacity: 0,
  y: 60,
  ease: "power1.inOut",
});

/* const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//Button Listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    console.log("none");
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    console.log("none");
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});
 */
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
const navSlide = () => {
  const menu = document.querySelector(".toggle-button");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelector(".nav-links li");

  menu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log(Object.keys(navLinks));
    Object.keys(navLinks).forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    menu.classList.toggle("toggle");
  });
};
navSlide();

const DOMSelectors = {
  normal: document.querySelector("#normal"),
  china: document.querySelector("#china"),
  body: document.getElementById("fullbody"),
};

//normal
document.querySelector("#normal").addEventListener("click", function () {
  DOMSelectors.body.style.backgroundColor = "white";
});
//yellow
document.querySelector("#china").addEventListener("click", function () {
  DOMSelectors.body.style.backgroundColor = "lightyellow";
});
