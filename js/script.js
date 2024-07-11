function toggleMenu() {
    const menu = document.querySelector(".menu");
    const burger = document.getElementById("burger-menu-container");
    menu.classList.toggle("open");
    burger.classList.toggle("open");
    console.log("toggling menu");
}

