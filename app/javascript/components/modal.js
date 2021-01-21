// --------resume modal---------
let modal = document.getElementById("simpleModal");
let modalBtn = document.getElementById("modalBtn");
let modalBtn2 = document.getElementById("modalBtn2");
let closeBtn = document.getElementById("closeBtn");

modalBtn.addEventListener("click", openModal);
modalBtn2.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", closeOutside);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function closeOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
//---------- cookies modal------

$(document).ready(function () {
  $("#cookieModal").modal("show");
});
