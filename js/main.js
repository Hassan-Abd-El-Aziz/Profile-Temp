// add class active to header on scrol

let header = document.querySelector("header");
window.onscroll = function () {
    if (this.scrollY >= 50) {
        header.classList.add("active")
    } else {

        header.classList.remove("active")
    }
}

let navLinks = document.getElementById("links");
function open_close_menu() {
    navLinks.classList.toggle("active")
}