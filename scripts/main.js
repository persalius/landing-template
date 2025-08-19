document.addEventListener("DOMContentLoaded", () => {
  fetch("src/index.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
    });
});
