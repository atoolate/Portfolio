
window.addEventListener("scroll", function () {
    let sticky = document.querySelector(".scroll-down");

    // Check the scroll position
    if (window.scrollY < 100) { // You can adjust the scroll threshold
        sticky.style.opacity = "100%"; // Apply blur
    } 
    else if(this.window.scrollY < 500) {
        sticky.style.opacity = '25%'
    }
    else {
        sticky.style.opacity = "0%"; // Remove blur
    }
});