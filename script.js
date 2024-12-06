
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const caption = document.getElementById("caption");
const closeButton = document.querySelector(".close");

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImage.src = this.src;
    caption.textContent = this.alt;
  });
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (event) {
  if (event.target !== modalImage) {
    modal.style.display = "none";
  }
});
