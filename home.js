import Typed from "typed.js";

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
});
