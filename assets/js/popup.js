// Function to handle each pop-up container
function handlePopUpContainer(buttonClass, containerClass, slideClass) {
  const button = document.querySelector(buttonClass);
  const container = document.querySelector(containerClass);
  const slides = document.querySelectorAll(slideClass);
  const nextButtons = container.querySelectorAll(".next");
  const prevButtons = container.querySelectorAll(".prev");
  let currentSlide = 0;
  
  button.addEventListener("click", () => {
    container.style.display = "block";
    showSlide(currentSlide);
  });

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    });
  });

  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      showSlide(currentSlide);
    });
  });

  container.addEventListener("click", (event) => {
    if (event.target === container) {
      container.style.display = "none";
    }
  });

  function showSlide(slideIndex) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }
}

// Call the function for each pop-up container
handlePopUpContainer(".add-button", ".popup-container", ".popup-slide");
handlePopUpContainer(".action-button", ".popup-container-edit", ".popup-slide-edit");
handlePopUpContainer(".action-button-expired", ".popup-container-expired", ".popup-slide-expired");
