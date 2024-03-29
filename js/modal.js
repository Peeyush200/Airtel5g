var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close_button");

function toggleModal() {
    modal.classList.toggle("show_modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);