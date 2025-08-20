document.addEventListener("DOMContentLoaded", () => {
  fetch("src/index.html")
    .then((response) => {
      return response.ok ? response.text() : null;
    })
    .then((html) => {
      if (html) {
        document.getElementById("content-container").innerHTML = html;
      }
    });
});
