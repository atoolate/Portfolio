window.addEventListener("scroll", function () {
    const menu = document.querySelector(".header");

    // Check the scroll position
    if (window.scrollY > 50) { // You can adjust the scroll threshold
        menu.style.backdropFilter = "blur(10px)"; // Apply blur
    } else {
        menu.style.backdropFilter = "blur(0)"; // Remove blur
    }
});