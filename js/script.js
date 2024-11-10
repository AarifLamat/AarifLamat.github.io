function toggleMenu() {
    const menu = document.querySelector(".menu");
    const burger = document.getElementById("burger-menu-container");
    const overlay = document.getElementById("overlay");
    overlay.addEventListener("click", toggleMenu);
    // document.body.appendChild(overlay);
    overlay.classList.toggle("open");
    menu.classList.toggle("open");
    burger.classList.toggle("open");
    console.log("toggling menu");
}
