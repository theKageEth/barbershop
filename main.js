import { gsap } from "gsap";
import Typed from "typed.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const menuOption = document.getElementById("menu-option");
  const menuToggle = document.getElementById("menu-toggle");

  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.getElementById("html");

  // Event listener for menu toggle button click
  menuToggle.addEventListener("click", function () {
    menuOption.style.display =
      menuOption.style.display === "none" || menuOption.style.display === ""
        ? "block"
        : "none";
  });

  // Event listener for window resize

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      // Change data-frame attribute to "dark" when checkbox is checked
      htmlElement.setAttribute("data-theme", "dark");
    } else {
      // Change data-frame attribute to "light" when checkbox is unchecked
      htmlElement.setAttribute("data-theme", "light");
    }
  });

  const typed = new Typed("#welcome", {
    strings: [
      "Welcome to Classic Cuts",
      "Welcome to Sophisticated",
      "Welcome to Stylish",
      "Welcome to the Art of Barbering",
    ],
    startDelay: 0,
    typeSpeed: 70,
    backSpeed: 20,
    loopCount: 2,
    loop: false,
    showCursor: false,
  });
  //background animation
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("particles-js", "/particlesjs-config.json", function () {});
  particlesJS.load(
    "particles-js2",
    "/particlesjs-config2.json",
    function () {}
  );
  //animations

  AOS.init();

  gsap.to("#opening", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#opening",
      start: "top 70%",
      end: "bottom 70%",
      scrub: true,
    },
  });

  document.querySelectorAll(".flip-card").forEach((card) => {
    gsap.to(card, {
      opacity: 1,
      duration: 1, // Animation duration in seconds
      scrollTrigger: {
        trigger: card,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });
  });
});
