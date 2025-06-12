function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Optional: Fade-in on scroll
window.addEventListener('scroll', () => {
  const section = document.querySelector('.about-section');
  const sectionTop = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  }
});
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
const toggle = document.getElementById("modeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => observer.observe(el));
