// simple year
document.getElementById("year").textContent = new Date().getFullYear();

// reveal on scroll
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.classList.add("show");
                io.unobserve(e.target);
            }
        });
    },
    { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// mailto fallback submit (no backend needed)
function sendMail(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = fd.get("name");
    const email = fd.get("email");
    const message = fd.get("message");
    const mailto = `mailto:bishalray982@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(
        name
    )}&body=${encodeURIComponent(
        message + "\n\nFrom: " + name + " <" + email + ">"
    )}`;
    window.location.href = mailto;
    const s = document.getElementById("form-status");
    s.textContent = "Opening your email app…";
    setTimeout(
        () =>
        (s.textContent =
            "If your email app didn’t open, please write to: bishalray982@gmail.com"),
        1800
    );
}
// Typing effect text
const jobText = "Software Developer";
let i = 0;
function typeWriter() {
    if (i < jobText.length) {
        document.getElementById("type-job").textContent += jobText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
typeWriter();

function scrollToSection(event, id) {
    event.preventDefault();
    const navHeight = document.querySelector(".nav").offsetHeight;
    if (!id) {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        return;
    }
    const target = document.getElementById(id);
    if (!target) return;
    const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
    });
}