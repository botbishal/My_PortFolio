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

  const subject = "Portfolio Message from " + name;
  const body = message + "\n\nFrom: " + name + " <" + email + ">";

  // Try default mail client first
  const mailto = `mailto:bishalray982@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;

  const s = document.getElementById("form-status");
  s.textContent = "Opening your email app…";

  // Ask user if they want Gmail fallback
  setTimeout(() => {
    const confirmOpen = confirm(
      "Your email app may not have opened. Do you want to open Gmail instead?"
    );
    if (confirmOpen) {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=bishalray982@gmail.com&su=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        "_blank"
      );
      s.textContent = "Opening Gmail…";
      location.reload();
    } else {
      s.textContent =
        "You cancelled Gmail fallback. You can write to: bishalray982@gmail.com";
    }
  }, 2000);
}

// Typing effect text
const jobText = "Software Developer";
let i = 0;
function typeWriter() {
  if (i < jobText.length) {
    document.getElementById("type-job").textContent += jobText.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
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

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && (e.key === "u" || e.key === "U")) {
    e.preventDefault();
    alert("View Source is disabled");
  }
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    alert("Developer Tools are disabled");
  }
});
