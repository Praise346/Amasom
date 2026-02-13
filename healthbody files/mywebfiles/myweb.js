//Mobile menu toggle
const menuToggle =
document.getElementById("menu-toggle");
const navLinks =
document.getElementById("nav-links");

menuToggle.addEventListener("click",() => {
    navLinks.style.display =
    navLinks.style.display === "flex" ? "none" : "flex";
});
//Scroll-to-top button
const scrollTopBtn =
document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200)
    {
        scrollTopBtn.style.display = "block"; }
        else{
            scrollTopBtn.style.display = "none";
        }
});
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behaviour: "smooth"});
});
//Scroll reveal effect
const sections =
document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add("show");
        }
    });

});
const texts = ["Isaiah Nzubechukwu Praise", " Frontend Developer ", "Software Engineer"];
let i = 0, j = 0, current = "", isDeleting = false;
function type() {
    current = texts[i];
    let display = current.substring(0,j);
    document.getElementById("typing").textContent = display;
    if (!isDeleting && j < current.length) {
        j++;
        setTimeout(type, 100);
    } else if (isDeleting && j > 0) {
        j--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i+1) % texts.length;
        setTimeout(type, 1000);
    }
}
type();
const faders = document.querySelectorAll(".fade-in");
window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight-50) {
            el.classList.add("show");
        }
    });
});

