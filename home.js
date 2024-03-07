import { gsap } from "gsap";
import Typed from "typed.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    strings: ["your barber", "your GizzlyBeard", "GizzlyBeard"],
    startDelay: 0,
    typeSpeed: 70,
    backSpeed: 20,
    loopCount: 2,
    loop: false,
    showCursor: false,
  });

  //animations

  gsap.to("#opening", {
    opacity: 1,
    scrollTrigger: {
      trigger: "#opening",
      start: "top 70%",
      end: "bottom 70%",
      scrub: true,
    },
  });

  document.querySelectorAll(".cardflip").forEach((label, index) => {
    // Find the input element within the label
    const checkbox = label.querySelector('input[type="checkbox"]');

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#card${index + 1}`,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    tl.to(checkbox, {
      checked: true,
    });
  });

  //dashboard functions

  var name = document.getElementById("name").value;
  var day = document.getElementById("day").value;
  var time = document.getElementById("time").value;
});
