const openBtns = document.querySelectorAll(".form-title");
const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const fileViewer = document.getElementById("fileViewer");

openBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    const filePath = this.getAttribute("data-file-path");
    openPopup(filePath);
  });
});

closeBtn.addEventListener("click", closePopup);

function openPopup(filePath) {
  fileViewer.src = filePath;
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  fileViewer.src = "";
}
