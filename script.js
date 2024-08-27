const menuBtnElement = document.getElementById('hamburger-btn');
const navLinksElement = document.getElementById('nav-links');
const menuBtnIcon = menuBtnElement.querySelector("i");

function displayNavLinks() {
    if(navLinksElement.style.display === 'none') {
        navLinksElement.style.display = 'flex';
        menuBtnIcon.classList.remove("ri-menu-line");
        menuBtnIcon.classList.add("ri-close-line");
    }
    else {
        navLinksElement.style.display = 'none';
        menuBtnIcon.classList.remove("ri-close-line");
        menuBtnIcon.classList.add("ri-menu-line");
    }
}

menuBtnElement.addEventListener('click', displayNavLinks);