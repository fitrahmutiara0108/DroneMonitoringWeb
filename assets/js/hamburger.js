document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".close-btn");
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const sidebar = document.querySelector(".sidebar");

  closeBtn.addEventListener("click", () => {
    console.log("Close button clicked!");
    sidebar.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    hamburgerBtn.classList.toggle("hidden");
  });

  hamburgerBtn.addEventListener("click", () => {
    console.log("Hamburger button clicked!");
    sidebar.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
    hamburgerBtn.classList.toggle("hidden");
  });
});