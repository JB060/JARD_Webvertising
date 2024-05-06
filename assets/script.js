document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    navbar.addEventListener("click", function() {
        navbar.classList.toggle("clicked");
    });
});
