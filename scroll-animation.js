document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skills-list i");
    let skillsVisible = false;

    function checkScroll() {
        const scrollPosition = window.scrollY + window.innerHeight;
        const skillsPosition = document.querySelector(".skills").offsetTop;

        skills.forEach((skill, index) => {
            const skillPosition = skillsPosition + (index * 40); // Adjust the offset for each icon
            if (scrollPosition >= skillPosition + 170) {
                skill.classList.add("visible");
            } else {
                skill.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
});
