(function () {
  "use strict";

  function initHero() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
      });
    }

    const primaryBtn = document.querySelector(".hero-section .btn-primary");
    const secondaryBtn = document.querySelector(".hero-section .btn-secondary");

    if (primaryBtn) {
      primaryBtn.addEventListener("click", function () {
        console.log("Primary CTA clicked");
      });
    }

    if (secondaryBtn) {
      secondaryBtn.addEventListener("click", function () {
        console.log("Secondary CTA clicked");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHero);
  } else {
    initHero();
  }
})();
