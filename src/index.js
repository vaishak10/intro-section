let toggleButton = document.querySelector(".js-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("hidden");
    toggleButton.classList.toggle("hidden");
  });
}

let toggleButton2 = document.querySelector(".js-toggle-2");
if (toggleButton2) {
  toggleButton2.addEventListener("click", function () {
    document.querySelector(".sidebar").classList.toggle("hidden");
    toggleButton.classList.toggle("hidden");
  });
}
